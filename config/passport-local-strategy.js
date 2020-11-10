const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const Buyer =require('../models/buyer');

//authentication using passport
passport.use(new LocalStrategy({
        usernameField:'email',
        passReqToCallback:true
    }, 
    //----done is passport callback function we can also use our own!
    function(req,email,password,done){
        //find the user and establish the identity
        Buyer.findOne({email:email},function(err,user){
            if(err){
                
                return done(err);
            }
            // @ts-ignore
            if(!user || user.password!=password){
                return done(null,false);  //---- null means no error false means no user found
            }
            return done(null,user); //---- null=> no error & user=>the user
        });
    }
));

//----Serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user,done){
    done(null,user.id);
});

//----deserialiaing the user from the key in the cookies
passport.deserializeUser(function(id,done){
    Buyer.findById(id,function(err,user){
        if(err){
            console.log('Error in finding user --> Passport');
            return done(err);
        }
        return done(null,user);
    });
});

//----check if the user is authenticated
// @ts-ignore
passport.checkAuthentication=function(req,res,next){
    //---- if the user is signes in, then pass on the request to the next function(controllers action)
    if(req.isAuthenticated()){
        return next();
    }
    //if the user is not signed in
    return;
}
// @ts-ignore
passport.setAuthenticatedUser=function(req,res,next){
    if(req.isAuthenticated()){
        //req.user conatins the current signed in user from the session cookies and we are just sending this to the locals for the views
        res.locals.user=req.user;
    }
    next();
}
module.exports=passport;