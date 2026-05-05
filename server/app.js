let express=require('express');
let adminRouter=require('./route/admin.route');
let app=express();
let cors=require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',adminRouter);

module.exports=app;