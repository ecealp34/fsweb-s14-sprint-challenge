/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments("project_id")
    tbl.string("project_name").notNullable()
    tbl.string("project_description")
    tbl.boolean("project_completed").defaultTo(false, {constraintName: `project_table_value`})
  })
  .createTable("resources", tbl => {
    tbl.increments("resource_id")
    tbl.string("resource_name").notNullable().unique()
    tbl.string("resource_description")
  })
  .createTable("tasks", tbl => {
    tbl.increments("task_id")
    tbl.string("task_description").notNullable()
    tbl.string("task_notes")
    tbl.boolean("task_completed").defaultTo(0)
    tbl.integer("project_id").notNullable().references("project_id").inTable("projects").onDelete("CASCADE")
  })
  .createTable("projects_resources", tbl => {
    tbl.increments("project_resource_id")
    tbl.integer("project_id").notNullable().references("project_id").inTable("projects").onDelete("CASCADE")
    tbl.integer("resource_id").notNullable().references("resource_id").inTable("resources").onDelete("CASCADE")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
            .dropTableIfExists("projects_resources")
            .dropTableIfExists("tasks")
            .dropTableIfExists("resources")
            .dropTableIfExists("projects")
};
