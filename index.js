const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const hostname = 'localhost';
const port = process.env.PORT || 3000;
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

/* app.use('/promotion',promoRouter);
app.use('/leader',leaderRouter) */


// To query /v2/everything
// You must include at least one q, source, or domain














/*
app.get('/dishes/:dishId', (req,res,next) => {
    res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
});

app.post('/dishes/:dishId', (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /dishes/'+ req.params.dishId);
});

app.put('/dishes/:dishId', (req, res, next) => {
  res.write('Updating the dish: ' + req.params.dishId + '\n');
  res.end('Will update the dish: ' + req.body.name + 
        ' with details: ' + req.body.description);
});
app.delete('/dishes/:dishId', (req, res, next) => {
  res.end('Deleting dish: ' + req.params.dishId);
});
*/

  
  
  
  const server = http.createServer(app);
  
   /*  if (req.method == 'GET') {
      var fileUrl;
      if (req.url == '/') fileUrl = '/index.html';
      else fileUrl = req.url;
  
      var filePath = path.resolve('./public'+fileUrl);
      const fileExt = path.extname(filePath);
      if (fileExt == '.html') {
        fs.exists(filePath, (exists) => {
          if (!exists) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Error 404: ' + fileUrl + 
                        ' not found</h1></body></html>');
            return;
          }
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          fs.createReadStream(filePath).pipe(res);
        });
      }
      else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404: ' + fileUrl + 
                ' not a HTML file</h1></body></html>');
      }
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>Error 404: ' + req.method + 
                ' not supported</h1></body></html>');
    }
  }) */
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});