const express = require('express');
const bodyParser = require('body-parser');

const technologyusRouter = express.Router()

technologyusRouter.use(bodyParser.json());

API_KEY = '0a455af2c4eb4b57a0a6c92228c886d9';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('0a455af2c4eb4b57a0a6c92228c886d9');




technologyusRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    newsapi.v2.sources({
        category: 'technology',
        language: 'en',
        country: 'us'
      }).then(response => {
        res.json(response);
        
      });
      



   
});


module.exports = technologyusRouter;