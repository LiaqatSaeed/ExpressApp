var express = require('express');
var router = express.Router();
const url = require('url'); 
var request = require('request');   

/* GET users listing. */
router.post('/', function(req, res, next) {
  request.post(url.format({
    pathname: "http://192.168.109.128:6899",
    query: req.body
  }),(err,response,body)=>{
   if(err) throw console.log(err);
   else
   res.redirect('/')
  })

});

module.exports = router;
