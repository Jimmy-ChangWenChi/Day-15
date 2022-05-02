const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        product:{
            type:String,
            required:[true,"product 未填寫"]
        },
        quantity:{
            type:Number,
            required:[true,"quantity 未填寫"]
        },
        price:{
            type:Number,
            required:[true,"price 未填寫"]
        }
    },
    {
        versionKey:false,
        collection:"products"
    }
)

const product = mongoose.model("products",schema)

module.exports = product;
