// `Proje` modeli buraya

const db = require("../../data/dbConfig");


async function getAll() {
    let projects = await db("projects");
    let mappedProjects = projects.map(x => {
        return {
            ...x, project_completed: x.project_completed == 1
        }
    });
    return mappedProjects;
}

async function findById(project_id) {
    let project = await db("projects").where("project_id",project_id).first();
    project.project_completed = project.project_completed == 1;
    return project;
}

async function create(model) {
    let [project_id] = await db("projects").insert(model);
    return findById(project_id);
}

module.exports = {getAll, findById, create}