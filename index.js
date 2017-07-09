// This is the server file for the app

require('dotenv').config();

const express = require('express');
const app = express();

// BodyParser takes form data with headers and metadata and converts it to JSON and attaches it to the request to an Object called body - (req.body)
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Cors allows the front end and back end of the app to talk to each other from separate servers.
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send('this works');
})

// app.use('/user', userController);
app.use(require("./resources"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
