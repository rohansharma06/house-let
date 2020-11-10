// @ts-nocheck
const Property = require('../models/property');
const Seller = require('../models//seller');
const Buyer = require('../models/buyer');
const Rent = require('../models/rent');
const { populate } = require('../models/property');

module.exports.create = async function(req,res){
    try {
        if (!req.body.name || !req.body.city || !req.body.rent || !req.body.phone || !req.body.bhk){
            return res.status(404).json({
                success: false,
                message: "Enter valid text"
            });
        }else{
            let newProperty = await Property.create(req.body);
            

            let owner = await Seller.findById(req.user.id);
            owner.properties.push(newProperty._id);
            owner.save();

            return res.status(200).json({
                success: true,
                message: "Property Register Successfully!",
            });
        }  
    }catch(err){
        return res.status(500).json({
            message: "Server Error",
        })
    }
}

module.exports.fetchproperty = async function(req,res){
    try {
        let user = req.user.id;
        let data = await Seller.findById(user)
        .populate({
            path :'properties',
            populate:({
                path:'rentApply',
                populate:({
                    path:'buyer',
                })
            })
        })

        return res.status(200).json({
            success: true,
            Property: data.properties,
        })

    }catch(err){
        return res.status(500).json({
            message: "Server Error",
        }); 
    }
}

module.exports.fetchAllProperty = async function(req,res){
    try{
        const property = await Property.find({})
        .populate({
            path:'rentApply',
            populate:({
                path:'buyer',
            })
        })

        return res.status(200).json({
            success: true,
            property,
        })
    }catch(err){
        return res.status(500).json({
            message: "Server Error",
        }); 
    }
} 

module.exports.applyForRent = async function(req,res){
    try {
        let property_id = req.body.propertyID;
        let buyer_id = req.body.userID;
        // console.log(property_id,buyer_id);
        let newRentApply = await Rent.create({
            buyer: buyer_id,
            property: property_id,
            status: 0,            
        })
        
        let buyer = await Buyer.findById(buyer_id);
        buyer.properties.push(property_id);
        buyer.save();

        let property = await Property.findById(property_id);
        property.rentApply.push(newRentApply._id);
        property.save();

        return res.status(200).json({
            success: true,
            // property_id,
            // buyer_id,
        })

    }catch(err){
        return res.status(500).json({
            message: "Server Error",
        }); 
    }
}

module.exports.fetchpropertydetails = async function(req,res){
    try{
        const property = await Property.findById(req.body.propertyID)
        .populate({
            path:'rentApply',
            populate:({
                path:'buyer',
            })
        })

        return res.status(200).json({
            success: true,
            property,
        })
    }catch(err){
        return res.status(500).json({
            message: "Server Error",
        }); 
    }
}

module.exports.changeStatus = async function(req,res){
    try{
        let status = req.body.status;
        let staus = await Rent.findByIdAndUpdate(req.body.id, {$set: {status: status}});
        return res.status(200).json({
            success: true,
        })
    }catch(err){
        return res.status(500).json({
            message: "Server Error",
        }); 
    }
}