import express from "express";
import routes from './src/routes/crmRoutes';
import mongoose  from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;
//connexion mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
    useNewUrlParser:true
});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
routes(app);
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.send(`server express work in ${PORT}`)
});

app.listen(PORT,()=>{
    console.log('apa running');
})