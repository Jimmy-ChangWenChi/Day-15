var express = require('express');
const { route } = require('../app');
var router = express.Router();
const User = require("../models/user")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//GET user
router.get("/", async (req,res)=>{
  const Alldata = await User.find();
  res.status(200).json({
    "status":"success",
    Alldata
  })
})


// POST user
router.post("/", async function(req,res){
  try{
    const data = req.body;
    let nickName = data.nickName;
    let gender = data.gender;
    let avatar = data.avatar;
    if(nickName !== undefined || gender !== undefined){
      const newUser = await User.create({nickName,gender,avatar});
      res.status(200).json({
        "status":"success",
        "message":"update done"
      })
    }else{
      res.status(400).json({
        "status":"false",
        "message":"請確認欄位是否正確"
      })
    }
  }catch(err){
    res.status(400).json({
      "status":"false",
      "message":err
    })
  }
})

// PATCH user
router.patch("/:id",async (req,res)=>{
  try{
    const id = req.params.id;
    const data = req.body;
    let nickName = data.nickName;
    let gender = data.gender;
    let avatar = data.avatar;

    if(nickName !== undefined || gender !== undefined){
      const newUser = await User.findByIdAndUpdate(id,req.body);
      res.status(200).json({
        "status":"success",
        "message":"update done"
      })
    }else{
      res.status(400).json({
        "status":"false",
        "message":"id 不存在"
      })
    }


  }catch(err){
    res.status(400).json({
      "status":"false",
      "message":err
    })
  }
})

//delete User
router.delete("/",async (req,res)=>{
  await User.deleteMany({})
  const AllUsers = await User.find()
  res.status(200).json({
    "status":"success",
    "message":"delete done",
    "data":AllUsers
  })
})


module.exports = router;
