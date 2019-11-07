const express = require('express')
const app = express();
const path = require('path');
const {requestAuth, acceptAuth} = require('./oauth.js')
const session = require('express-session');

app.use(session({
	secret: "a secret",
	rolling: true,
}))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
});

app.get('/settings', (req, res) => {
	res.send('made it to settings');
})

app.get('/auth', requestAuth);
app.get('/accept-auth', acceptAuth);

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
