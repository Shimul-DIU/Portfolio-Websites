let Admin=require('../model/admin');
let path=require('path');
let getAdmin=async (req,res)=>{
  let {email,password}=req.body;
   try {
    if (!email || !password) {
      return res.status(400).json({message:"Email and password are required"});
    }
    let admin=await Admin.findOne({email});
    if (!admin) {
      return res.status(404).json({message:"Admin not found"});
    }
    res.json({message:"Get admin",admin});

   } catch (error) {
    res.status(500).json({message:"Error fetching admins"});
   }
}

let createAdmin=async (req,res)=>{
  try {
    let {name,email,password}=req.body;
    let admin=new Admin({name,email,password});
    await admin.save();
    res.json({message:"Admin created successfully"});
  } catch (error) {
    res.status(500).json({message:"Error creating admin"});
  }
}

let dashboard= (req,res)=>{
  res.sendFile(path.join(__dirname, '../view/dashboard.html'));
}

module.exports={getAdmin,createAdmin,dashboard};