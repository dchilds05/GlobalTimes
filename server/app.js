// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config');

// ℹ️ Connects to the database
require('./db');

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express');

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require('./config')(app);

app.use((req, res, next) => {
	// If no routes match, send them the React HTML.
	res.sendFile(__dirname + "/public/index.html");
  });

// default value for title local
const projectName = 'Project3';
const capitalized = (string) =>
	string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)} created with Ironlauncher`;



// 👇 Start handling routes here

const countryRouter = require('./routes/country.routes');
app.use('/country', countryRouter);

const editUserRouter = require('./routes/editUser.routes');
app.use('/editUser', editUserRouter);

const homeRouter = require('./routes/home.routes');
app.use('/', homeRouter);

const savedArticleRouter = require('./routes/savedArticle.router');
app.use('/savedArticles', savedArticleRouter);

const signupRouter = require('./routes/signup.router');
app.use('/auth', signupRouter);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;
