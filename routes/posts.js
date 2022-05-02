
var express = require('express');
const { route } = require('../app');
var router = express.Router();
const Post = require("../models/posts");

router.post("/", async (req,res,next)=>{
    try{
        const data = req.body;
        console.log(data);
        if(data.name !== "" || data.content !== ""){
            const newProduct = await Post.create(
                {
                name:data.name,
                content:data.content,
                image:data.image
            })
            res.status(200).json({
                status:"success",
                data
            })
        }else{
            console.log("欄位有誤")
        }
    }catch(error){
        res.status(400).json({
            status: 'false',
            "message": error.message
        });
    }
})


module.exports = router;