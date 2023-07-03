// `Resource` modeli buraya

const db = require("../../data/dbConfig");


async function getAll() {
    let resources = await db("resources");
    return resources;
}

async function findById(resource_id) {
    let resource = await db("resources").where("resource_id",resource_id).first();
    return resource;
}

async function getByResourceName(resource_name) {
    let resource = await db("resources").where("resource_name",resource_name).first();
    return resource;
}

async function create(model) {
    let [resource_id] = await db("resources").insert(model);
    return findById(resource_id);
}
module.exports = {getAll, findById, getByResourceName, create}