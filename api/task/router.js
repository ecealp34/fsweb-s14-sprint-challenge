// `/api/tasks` router buraya
const router = require("express").Router();
const tasksModel = require("./model");
const mw = require("./task-middleware")

router.get("/", async (req,res,next) => {
    try {
        res.json(await tasksModel.getAll());
    } catch (error) {
        next(error);
    }
});

router.post("/",mw.validatePayload, mw.validateProjectId, async (req,res,next) => {
    try {
        let inserted = {
            task_description: req.body.task_description,
            task_notes: req.body.task_notes,
            project_id: req.body.project_id,
            task_completed: req.body.task_completed
        }
        const insertedTask = await tasksModel.create(inserted)
        res.status(201).json(insertedTask);
    } catch (error) {
        next(error);
    }
});


module.exports = router;