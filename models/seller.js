const mongoose = require('mongoose');

//---schema
const sellerSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        properties: [
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Property",
            }
        ],
    },{
        timestamps: true
    }
);

const Seller = mongoose.model("Seller", sellerSchema);
module.exports = Seller;