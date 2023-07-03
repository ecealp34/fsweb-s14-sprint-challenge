
const resourceModel = require("./model");


async function validatePayload(req,res,next) {
    try {
        let {resource_name} = req.body;
        if(!resource_name) {
            res.status(400).json({message:"Eksik alanları tamamlayın"});
        } else {
            const existResource = await resourceModel.getByResourceName(resource_name);
            if(existResource) {
                res.status(400).json({message:`${req.body.resource_name} daha önce eklenmiş`});
            } else {
              next();  
            }
        }
    } catch (error) {
        next(error);        
    }
}

module.exports = { validatePayload }