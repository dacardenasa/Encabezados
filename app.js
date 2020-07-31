const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const browser = req.header('User-Agent');
  res.send(browser);
})

app.listen(port, ()=> console.log('Listening on port 3000!'));