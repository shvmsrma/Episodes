const express = require('express');
//const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
//const hostname = 'localhost';
//const port = process.env.PORT || 3000;
const app = express();
const headlinesusRouter = require('./routes/headlinesusrouter');
const headlinesindiaRouter = require('./routes/headlinesindiarouter');
const sportsindiaRouter = require('./routes/sportsindiarouter');
const sportsusRouter = require('./routes/sportsusrouter');
const technologyusRouter  = require('./routes/technologyusrouter');
const technologyindiaRouter  = require('./routes/technologyindiarouter');

/* const promoRouter= require('./routes/promorouter');
const leaderRouter = require('./routes/leadersrouters'); */
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/headlinesus',headlinesusRouter);
app.use('/headlinesindia',headlinesindiaRouter);
app.use('/sportsindia',sportsindiaRouter);
app.use('/sportsus',sportsusRouter);
app.use('/technologyus',technologyusRouter);
app.use('/technologyindia',technologyindiaRouter);



  
  
  
  //const server = http.createServer(app);
  
   
  var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("Express is working on port " + port);
  });