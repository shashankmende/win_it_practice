
const winitModel  = require('../models/winit_models')


const Home = async(req,res)=>{
    try {
        res.send("we are in home page in winit backend practice")
    } catch (error) {
        res.send("Error in Home page",error)
    }
}


const GetWinit = async(req,res)=>{
    try {
        
        const result = await winitModel.find({companyName:"winit"})
        res.send({result: result});
    } catch (error) {
        res.send("Error in getController method",error)
    }
}

const postWinit = async(req,res)=>{
    try {
        const {companyName,package} = req.body;
        winitModel.create({companyName,package})
        res.send("post created successfully")
    } catch (error) {
        res.send("Error in post winit controller",error)
        
    }
}


module.exports.Home= Home
module.exports.GetWinit=GetWinit
module.exports.postWinit=postWinit