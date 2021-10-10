var express = require('express');
var router = express.Router();
var registerInitialCheck = require('../middlewares/registerChecks');
var {register, registerSuperAdmin} = require("../controllers/register");
var { check } = require("../middlewares/checkSuperAdmin");


const session = require('express-session');
router.get('/', function(req, res, next) {

  const sess = req.session;
  sess.username= 'vidhi';
  
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req,res,next){
  console.log('Redis value', req.session.username);
  res,render('index', {title:'Express'});

}

);

router.post('/register', registerInitialCheck, register);
router.post('/register-super-admin', registerInitialCheck, register);
router.get('/super',  check );
module.exports = router;

router.post('/register',registerInitialChecks,register);
module.exports = router;