/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const defaultProjects = [
  {project_name:"React Web Tasarımı",project_description:"React kullanarak tailwind css ile ekran tasarlanacak"},
  {project_name:"Library Uygulaması tasarımı",project_description:"React kullanarak bootstrap css ile ekran tasarlanacak"}
];

const defaultResources = [
  {resource_name:"Google",resource_description:"Google search engine"},
  {resource_name:"ChatGPT",resource_description:"OenAI ChatGPT"},
  {resource_name:"GitHub",resource_description:"Github repo"}
];

const defaultTasks = [
  {task_description:"React form component oluştur", task_notes:"bootstrap ile form ekranı tasarlama", project_id:1},
  {task_description:"Flutter arayüz oluşturulması", task_notes:"flutter componentlerinden cardView ile arayüz tasarımı", project_id:2},
  {task_description:"Flutter grid oluşturulması", task_notes:"flutter componentlerinden grid ile listeleme ekranı oluşturulması", project_id:2}
];


exports.seed = async function(knex) {

  await knex('projects_resources').truncate()
  await knex('tasks').truncate()
  await knex('resources').truncate()
  await knex('projects').truncate()

  await knex('projects').insert(defaultProjects);
  await knex('resources').insert(defaultResources);
  await knex('tasks').insert(defaultTasks);
  await knex('projects_resources').insert([
    {project_id:1, resource_id:1},
    {project_id:1, resource_id:2 },
    {project_id:1, resource_id:3},
    {project_id:2, resource_id:1},
    {project_id:2, resource_id:2 },
    {project_id:2, resource_id:3},
  ]);
};
