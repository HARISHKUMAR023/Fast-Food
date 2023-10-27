function getsignup(req,res){
res.render('customer/auth/signup')
}

//login 
function getlogin(req,res){
res.render('customer/auth/login')
}

module.exports={
   getsignup : getsignup,

    getlogin : getlogin
}