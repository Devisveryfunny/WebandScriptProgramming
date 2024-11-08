var express = require('express');
var router = express.Router();

// Route for the home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// Route for the about me page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

// Route for the projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

// Route for the contact me page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
