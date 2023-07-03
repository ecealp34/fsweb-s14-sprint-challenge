// bu`Task` modeli buraya

const db = require("../../data/dbConfig");


async function getAll() {
    let allTasks = await db("tasks as t")
                         .leftJoin("projects as p", "t.project_id", "p.project_id")
                         .select("t.*", "p.project_name", "p.project_description");
     let mappedTasks = allTasks.map(x => {
        return {
            ...x, task_completed: x.task_completed == 1
        }
    });
    return mappedTasks;
    
}

async function findById(task_id) {
    let task = await db("tasks").where("task_id",task_id).first();
    task.task_completed = task.task_completed == 1;
    return task;
}


async function create(model) {
    let [task_id] = await db("tasks").insert(model);
    return findById(task_id);
}
module.exports = {getAll, findById, create}