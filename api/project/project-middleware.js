

function validatePayload(req,res,next) {
    try {
        let {project_name} = req.body;
        if(!project_name) {
            res.status(400).json({message:"Eksik alanları tamamlayın"});
        } else {
            next();
        }
    } catch (error) {
        next(error);        
    }
}

module.exports = { validatePayload }