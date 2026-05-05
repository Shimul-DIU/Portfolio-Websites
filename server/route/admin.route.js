let express=require('express');
let router=express.Router();
let {getAdmin,createAdmin,dashboard}=require('../controller/admin.controller');

router.get('/admin',getAdmin);
router.post('/admin',createAdmin);

router.get('/dashboard',dashboard);


module.exports=router;