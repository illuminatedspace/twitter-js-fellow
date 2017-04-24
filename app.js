//module require-s
const express = require('express');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
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

//inserts Volleyball as logging middleware
//replaces above block
app.use(volleyball);

//a get route
app.get('/', (req, res, next) => {
  res.send('I get mine before I got got tho');
});

const renderTestObject = {
  people: [
    {name: 'Gandalf'},
    {name: 'Frodo'},
    {name: 'Hermione'}
  ]
}

app.get('/render-test', (req, res, next) => {
  nunjucks.render('index.html', renderTestObject, (err, output) => console.log(output))
  res.send()
})
