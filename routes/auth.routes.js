const express = require('express');
const authcontroller = require('../controllers/auth.controllers');
const router = express.Router();
router.get('/login',authcontroller.getlogin);
router.get('/signup',authcontroller.getsignup);
router.post('/signup',authcontroller.signup);
router.get('/',authcontroller.home);
module.exports = router;