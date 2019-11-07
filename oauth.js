'use strict';

const {google} = require('googleapis');
const fs = require('fs');
const path = require('path');

/**
 * To use OAuth2 authentication, we need access to a a CLIENT_ID, CLIENT_SECRET, AND REDIRECT_URI.  To get these credentials for your application, visit https://console.cloud.google.com/apis/credentials.
 */
const keyPath = path.join(__dirname, 'client_id.json');
let keys = {redirect_uris: ['']};
if (fs.existsSync(keyPath)) {
  keys = require(keyPath).web;
}

/**
 * Create a new OAuth2 client with the configured keys.
 */
const oauth2Client = new google.auth.OAuth2(
  keys.client_id,
  keys.client_secret,
  keys.redirect_uris[0]
);

const scopes = ["https://www.googleapis.com/auth/photoslibrary.appendonly"]
const authUrl = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',
  // If you only need one scope you can pass it as a string
  scope: scopes.join(' ')
});

function requestAuth(req, res, next) {
  res.redirect(authUrl)
};

async function acceptAuth(req, res, next) {
  const {tokens} = await oauth2Client.getToken(req.query.code);
  console.log(req.query)
  console.log(tokens)
  oauth2Client.credentials = tokens
  // save the tokens??
  res.redirect('/settings')
}

module.exports = {requestAuth, acceptAuth}
