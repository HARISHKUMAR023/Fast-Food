const User = require('../models/user.model');

function getsignup(req,res){
res.render('customer/auth/signup')
}

//login 
function getlogin(req,res){
res.render('customer/auth/login')
}
function home(req,res){
    res.render('index')
}
async function signup(req,res){  
    const user = new User(
        req.body.email,
        req.body.password,
        req.body.fullname,
      
        // req.body.street,
        // req.body.postal,
        // req.body.city
      );
    
    await user.signup();
    
    res.redirect('/login');
 }


module.exports={
   getsignup : getsignup,
    signup : signup,
    getlogin : getlogin,
    home : home
}