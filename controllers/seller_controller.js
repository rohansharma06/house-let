const Seller = require('../models/seller');
const bcrypt = require('bcryptjs');

module.exports.register = async function(req,res){
    try {
        // console.log(req.body);
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
                console.log('newseller',newSeller);
                return res.status(200).json({
                    success: true,
                    message: "Seller Register Successfully!",
                    id:  newSeller._id,
                });
            }
            else{
                return res.status(208).json({
                    success: false,
                    message: "User already exist",
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
        let seller = await Seller.findOne({email: req.body.email});

        if(!seller || !bcrypt.compareSync(req.body.password, seller.password)){
            return res.status(404).json({
                success: false,
                message: "Invalid Username/Password",
            });
        }else{
            return res.status(200).json({
                success: true,
                message: "Sign in successfully",
                id:  seller._id
            });
        }
    }catch (err) {
        return res.status(500).json({
          message: "Internal Server Error",
          err: err
        });
    }
}
