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
      app.use(express.static(`${__dirname}./../build`))

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
      
      app.get('/api/form/:city_id', (req, res) => {
          req.app.get('db').get_data(req.params.city_id).then(restaurant_data => {
              res.status(200).send(restaurant_data);
          } ) //only this because I chose city_id in the url above

        app.delete('/api/form/:id', (req, res) => {
            req.app.get('db').delete_restaurant_submission([req.params.id]).then(submissions => {
                req.app.get('db').get_data().then(submissions => {
                    res.status(200).send(vids);
                })
            })
        })
        //   req.app.get('db').get_form(req.body.restaurant_name, req.body.restaurant_address, req.body.rating).then(form => {
        //       req.app.get('db').get_city(req.body.city).then(city => {
        //             req.app.get('db').get_category(req.body.category).then(category => {
        //                 res.status(200).send({category, city, form});
        //             })
        //       })
        //     })
          

      })

      const port = 3030;
      app.listen(port, () => console.log('Listening on port: ', port))