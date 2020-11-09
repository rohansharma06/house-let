const Buyer = require('../models/buyer');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports.register = async function(req,res){
    try {
        // console.log(req.body);
        if (!req.body.email || !req.body.name || !req.body.phone || !req.body.password || !req.body.confirmPassword){
            return res.status(404).json({
                message: "Enter valid text"
            });
        }else if(req.body.password != req.body.confirmPassword){
            return res.status(404).json({
                message: "Pasword and confirm does't match!"
            });
        }
        else {
            let seller = await Buyer.findOne({email: req.body.email});
            if(!seller){
                let salt = await bcrypt.genSalt(10);
                let hash = await bcrypt.hash(req.body.password, salt);
                let newBuyer = await Buyer.create({
                    email: req.body.email,
                    name: req.body.name,
                    phone: req.body.phone,
                    password: hash
                });
                newBuyer.save();
                
                return res.status(200).json({
                    success: true,
                    message: "Register Successfully!",
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
        let buyer = await Buyer.findOne({email: req.body.email});

        if(!buyer || !bcrypt.compareSync(req.body.password, buyer.password)){
            return res.status(404).json({
                success: false,
                message: "Invalid Username/Password",
            });
        }else{
            return res.status(200).json({
                success: true,
                message: "Sign in successfully",
                user: {
                    token: jwt.sign(buyer.toJSON(), "rentingwebsite", {
                        expiresIn: 100000000,
                      }),
                      id:  buyer._id,
                      name: buyer.name
                },
            });
        }
    }catch (err) {
        return res.status(500).json({
          message: "Internal Server Error",
          err: err
        });
    }
}