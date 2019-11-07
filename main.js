const express = require('express')
const app = express();
const {storeHandles} = require('./upload.js')
app.get('/', (req, res) => {
  res.send('Hello World!')
});


app.get('/gallery', storeHandles)
app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
