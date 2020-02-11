const express = require('express');
const router = require('./router');
const PORT = 5000;
const app = express();
app.use(express.json());

app.use( router );

app.listen(PORT, () => {
  console.log(`My app listening on port ${PORT}`);
});