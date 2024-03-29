const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/api', (req, res) => {
  res.render('sample.ejs');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});