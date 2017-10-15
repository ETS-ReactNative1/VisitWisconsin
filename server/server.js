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
      console.log(`${__dirname}/build`);
      app.use(express.static(`${__dirname}./../../build`))

      app.post('/api/form', (req, res) => {
        const form = app.get('db')
        let city = parseInt(req.body.city_id);    
        req.app.get('db').create_restraunts([req.body.first_name, req.body.restraunt_name, req.body.restraunt_address, req.body.rating, req.body.city_id]).then(submission => {
            res.send()
        })
        console.log(city);
      })
      
      const port = 3030;
      app.listen(port, () => console.log('Listening on port: ', port))