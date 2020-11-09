const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        rent: {
            type: String,
            required:true
        },
        phone: {
            type:String,
            required:true
        },
        bhk:{
            type:String,
            required:true
        },
        description: {
            type: String,
        },
        rentApply:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref: 'Buyer' ,
                status: {
                    type: Number,
                }
            }
        ]
    },
    {
        timestamps: true
    }
);

const Property = mongoose.model('Property', propertySchema);
module.exports = Property;