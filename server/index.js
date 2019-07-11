require('dotenv').config();
const express = require('express');
const massive = require('massive')

const app = express();

const { CONNECTION_STRING } = process.env

app.use(express.json());

massive(CONNECTION_STRING)
  .then((db) => {
    app.set('db', db)
    console.log(`It's working! IT'S WORKING!!!!`);
  })
  .catch((err) => {
    console.log('you have an err connecting to your database')
    console.log(err)
  })

const PORT = process.env.SERVER_PORT || 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));