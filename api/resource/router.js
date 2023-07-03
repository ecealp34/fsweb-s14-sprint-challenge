// `/api/resources` router buraya
const router = require("express").Router();
const resourceModel = require("./model");
const mw = require("./resource-middleware");

router.get("/", async (req,res,next) => {
    try {
        res.json(await resourceModel.getAll());
    } catch (error) {
        next(error);
    }
});

router.post("/",mw.validatePayload, async (req,res,next) => {
    try {
        let inserted = {
            resource_name: req.body.resource_name,
            resource_description: req.body.resource_description
        }
        const insertedResource = await resourceModel.create(inserted)
        res.status(201).json(insertedResource);
    } catch (error) {
        next(error);
    }
});


module.exports = router;