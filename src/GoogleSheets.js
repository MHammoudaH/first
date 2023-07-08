const { google } = require('googleapis');
const fs = require('fs');

// Load the credentials from the JSON file
const credentials = JSON.parse(fs.readFileSync('credentials.json'));

// Create an OAuth2 client using the credentials
const client = new google.auth.OAuth2(
  credentials.client_id,
  credentials.client_secret,
  credentials.redirect_uris[0]
);

// Generate an authentication URL
const authUrl = client.generateAuthUrl({
  access_type: 'offline',
  scope: ['https://www.googleapis.com/auth/spreadsheets'],
});

// Set up the Google Sheets API client
const sheets = google.sheets({ version: 'v4', auth: client });

// Function to append data to the Google Sheets file
async function appendData(data) {
  const spreadsheetId = '1XppjlHRSyMSJEC-Nxeu2I4-qJVge3pgH2mhoLOhtL-Q'; // Replace with your actual spreadsheet ID
  const range = 'Sheet1!A1:B'; // Replace with the desired sheet and range

  try {
    // Retrieve the existing values in the range
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    // Extract the values from the response
    const existingValues = response.data.values || [];

    // Append the new data to the existing values
    const updatedValues = [...existingValues, data];

    // Update the values in the sheet
    const updateResponse = await sheets.spreadsheets.values.update({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      resource: {
        values: updatedValues,
      },
    });

    console.log(`${updateResponse.data.updatedCells} cells updated.`);
  } catch (err) {
    console.error('Error appending data:', err);
  }
}

module.exports = {
  authUrl,
  appendData,
};
