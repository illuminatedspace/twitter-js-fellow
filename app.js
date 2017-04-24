//module require-s
const express = require('express');
const chalk = require('chalk');
const volleyball = require('volleyball');

//chalk styles
const reqLogType = chalk.dim.bgBlue;
const reqLogPath = chalk.blue;

//chalk logging methods
//getting this to log response status codes is kind of crazy.
//using volleyball instead
// const request = function (reqObject, resObject) {
//   const logString = `${reqLogType(reqObject.method)} ${reqLogPath(reqObject.path)}`;
//   console.log(logString);
// }

//initialize express application
const app = express();

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
