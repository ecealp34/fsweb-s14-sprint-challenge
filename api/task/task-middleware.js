
const projectModel = require("../project/model");

function validatePayload(req,res,next) {
    try {
        let {task_description,project_id} = req.body;
        if(!task_description || !project_id) {
            res.status(400).json({message:"Eksik alanları tamamlayın"});
        } else {
            next();
        }
    } catch (error) {
        next(error);        
    }
}

async function validateProjectId(req,res,next) {
    try {
        let {project_id} = req.body;
        const existProject = await projectModel.findById(project_id);
        if(!existProject) {
            res.status(404).json({message:`${req.body.project_id} yanlış`});
        } else {
            next();
        }
    } catch (error) {
        next(error);        
    }
}


module.exports = { validatePayload, validateProjectId }