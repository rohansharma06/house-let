const mongoose = require('mongoose');

const rentSchema = new mongoose.Schema(
    {
        buyer: {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Buyer' ,
        },
        property: {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Property' ,
        },
        status : {
            type:Number,
            default:0,
        }
    },
    {
        timestamps: true
    }
);

const Rent = mongoose.model('Rent', rentSchema);
module.exports = Rent;