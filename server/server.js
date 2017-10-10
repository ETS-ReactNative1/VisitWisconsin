require('dotenv').config();

const express = require ('express'),
      bodyParser = require ('body-parser'),
      massive = require ('massive'),
      session = require ('express-session'),
      cors = require ('cors');  

      const app = express();

      massive(process.env.CONNECTION_STRING)
      .then( db =>{
          app.set('db', db);
      })

      app.use(cors());
      app.use(bodyParser.json());

      app.post('/api/form', (req, res) => {
        const form = app.get('db')
        req.app.get('db').create_restraunts([req.body.first_name, req.body.restraunt_name, req.body.restraunt_address, req.body.rating, req.body.city_id]).then(submission => {
            res.send()
        })
      })
      
      const port = 3030;
      app.listen(port, () => console.log('Listening on port: ', port))