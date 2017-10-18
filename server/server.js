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
        let category = parseInt(req.body.category_id);    
        req.app.get('db').create_restaurants([req.body.first_name, req.body.restaurant_name, req.body.restaurant_address, req.body.rating, req.body.city_id, req.body.category_id]).then(submission => {
            res.send()
        })
        console.log(city);
        console.log(category);
      })
      
      const port = 3030;
      app.listen(port, () => console.log('Listening on port: ', port))