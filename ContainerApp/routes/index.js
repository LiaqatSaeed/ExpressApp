var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  var data= {};
  request.get("http://192.168.109.128:6899",(err,response,body)=>{
   if(err) throw console.log(err);
   else
   data = { title: 'Express',employees: JSON.parse(body)}     
   console.log(data);
   res.render('index', data); 
  });
 
 


});




module.exports = router;
