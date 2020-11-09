const Property = require('../models/property');
const Seller = require('../models//seller');

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