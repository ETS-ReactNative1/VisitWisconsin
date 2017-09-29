require('dotenv').config();

const express = require ('express'),
      bodyParser = require ('body-parser'),
      massive = require ('massive'),
      session = require ('express-session');

      const app = express();

      massive(process.env.CONNECTION_STRING)
      .then( db =>{
          app.set('db', db);
      })
      
      const port = 3030;
      app.listen(port, () => console.log('Listening on port: ', port))