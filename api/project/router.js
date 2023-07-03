//  `/api/projects` router buraya
const router = require("express").Router();
const projectsModel = require("./model");
const mw = require("./project-middleware");

router.get("/", async (req,res,next) => {
    try {
        res.json(await projectsModel.getAll());
    } catch (error) {
        next(error);
    }
});

router.post("/",mw.validatePayload, async (req,res,next) => {
    try {
        let inserted = {
            project_name: req.body.project_name,
            project_description: req.body.project_description,
            project_completed: req.body.project_completed
        }
        const insertedProject = await projectsModel.create(inserted)
        res.status(201).json(insertedProject);
    } catch (error) {
        next(error);
    }
});


module.exports = router;