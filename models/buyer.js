const mongoose = require('mongoose');

//---schema
const buyerSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone:{
            type: Number,
            required: true,
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
                ref:'Property',
            }
        ],
    },{
        timestamps: true
    }
);

const Buyer = mongoose.model("Buyer", buyerSchema);
module.exports = Buyer;