const Seller = require('../models/seller');
const bcrypt = require('bcryptjs');

module.exports.register = async function(req,res){
    try {
        if (!req.body.email || !req.body.name || !req.body.password || !req.body.confirmPassword){
            return res.status(404).json({
                message: "Enter valid text"
            });
        }else {
            let seller = await Seller.findOne({email: req.body.email});
            if(!seller){
                let salt = await bcrypt.genSalt(10);
                let hash = await bcrypt.hash(req.body.password, salt);
                let newSeller = await Seller.create({
                    email: req.body.email,
                    name: req.body.name,
                    password: hash
                });
                newSeller.save();
                return res.status(200).json({
                    message: "Seller Register Successfully!",
                });
            }
            else{
                return res.status(200).json({
                    message: "Already exist",
                }); 
            }
        }
        
    }catch(err){
        return res.status(500).json({
            message: "Server Error",
        })
    }
}

module.exports.login = async function(req,res){
    try {
        console.log(req.body);
        let seller = await Seller.findOne({email: req.body.email})
        console.log(seller.email);
        if(!seller){
            return res.status(422).json({
                message: "Invalid Username/Password",
            });
        }else{
            return res.status(200).json({
                message: "Sign in successfully, here is your token, please keep it safe",
                Seller: { seller }
            });
        }
    }catch (err) {
        return res.status(500).json({
          message: "Internal Server Error",
        });
    }
}
