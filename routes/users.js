var express = require('express');
var router = express.Router();
var count = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  count++;
  res.send(`User accesses are: ${count}`);
});

module.exports = router;



// Open users.js in VSCode.   
// 2) Just after setting the router, create a variable value which is initialized to 0. 
// 3) Inside the router callback function before the send, add one to value; 
// 4) Change the send text so the response is something like “User accesses are: 4” where 
// the number is value.  You can use concatenation or string interpolation. 
// 5) Use Heroku to start a local server and check your code on localhost.5000/users. Every 
// reload should increase the value by one. 
// 6) Add and commit the changes. 
// 7) Push to origin main 
// 8) Push to heroku main 
// 9) Do a heroku ps:scale web=1 
// git push heroku main 
// heroku ps:scale web=1 
// heroku open 
// heroku local web 
// git add . 
// git status 
// git commit -m “new endpoint” 
// git push origin main  
// 10) Direct your browser to the Heroku server with /users and verify that it is working 
// remotely.
