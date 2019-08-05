const express = require('express');
const bodyParser = require('body-parser');

const sportsusRouter = express.Router()

sportsusRouter.use(bodyParser.json());

API_KEY = '0a455af2c4eb4b57a0a6c92228c886d9';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('0a455af2c4eb4b57a0a6c92228c886d9');




sportsusRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    newsapi.v2.sources({
        category: 'sports',
        language: 'en',
        country: 'us'
      }).then(response => {
        res.json(response);
        /*
          {
            status: "ok",
            sources: [...]
          }
        */
      });
      



   
});


module.exports = sportsusRouter;