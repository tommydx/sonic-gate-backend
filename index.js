// This is the server file for the app

require('dotenv').config();

const express = require('express');
const app = express();
// Don't need the .js extension because NODE knows it's JS
const userController = require('./controllers/user-controller');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(require('./controllers/user-controller'));

app.get('/', (req, res) => {
  res.send('this works');
})

app.use('/user', userController);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
