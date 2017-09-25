require('dotenv').config();

const express = require ('express'),
      bodyParser = require ('body-parser'),
      massive = require ('massive'),
      session = require ('express-session');

      const app = express();

      const port = 3030;
      app.listen(port, () => console.log('Listening on port: ', port))