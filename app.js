//module require-s
const express = require('express');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require('./routes/index.js');
const fs = require('fs');
const bodyParser = require('body-parser');
const mime = require('mime');
// const chalk = require('chalk');

//USING VOLLEYBALL INSTEAD
//chalk styles
// const reqLogType = chalk.dim.bgBlue;
// const reqLogPath = chalk.blue;

//chalk logging methods
//getting this to log response status codes is kind of crazy.
// const request = function (reqObject, resObject) {
//   const logString = `${reqLogType(reqObject.method)} ${reqLogPath(reqObject.path)}`;
//   console.log(logString);
// }

//initialize express application
const app = express();

//nunjucks setup
//sets the express 'view engine' setting to html
app.set('view engine', 'html');
//sets express html render engine to the nunjucks render function
app.engine('html', nunjucks.render);
//tells nunjucks the path of the templates
nunjucks.configure('views', { noCache: true });

//start listening, doesn't matter where this is
app.listen(3000, () => {
  console.log('listening on port 3000!');
});

//creates applicaiton level middleware with .use
//can print req type and req path
// app.use((req, res, next) => {
//   request(req, res)
//   next();
// })

//bodyParser middleware to parse the body
app.use(bodyParser.urlencoded({ entended: false }));
app.use(bodyParser.json());

//inserts Volleyball as logging middleware
//replaces above block
app.use(volleyball);

//static serve public folder
app.use(express.static('public'));

//replaced by single line above
app.use('/', (req, res, next) => {
  const path = req.path;
  const file = `${__dirname}/public${path}`

//works with or without mime. Don't know why we need it
  // const mimeType = mime.lookup(req.path);

  fs.readFile(file, (err, fileBuffer) => {
    if (err) {
      return next();
    } else {
      // res.header('Content-Type', mimeType);
      res.sendFile(file);
      //OR
      //res.send(fileBuffer);
    }
  })
})

//given in the solution
// app.use((req, res, next) => {
//   const mimeType = mime.lookup(req.path);
//   fs.readFile('./public' + req.path, (err, fileBuffer) => {
//     if (err) return next();
//     res.header('Content-Type', mimeType);
//     res.send(fileBuffer);
//   });
// });


app.use('/', routes);

//replacing below with a router module
// //a get route
// app.get('/', (req, res, next) => {
//   res.send('I get mine before I got got tho');
// });

// const renderTestObject = {
//   title: 'Hall of Fame',
//   people: [
//     {name: 'Gandalf'},
//     {name: 'Frodo'},
//     {name: 'Hermione'}
//   ]
// }

// app.get('/render-test', (req, res, next) => {
//   res.render('index', renderTestObject);
// })
