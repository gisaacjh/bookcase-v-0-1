exports.up = function(knex, Promise) {
  return knex
    .schema
    .table('project_documentsTable', function(table) {
      table.integer('id_documents')
      .unsigned()
      .references('id')
      .inTable('documents');
      return table;
  });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .table('project_documentsTable', table => {
      table.dropForeign('id_documents')
      table.dropColumn('id_documents');
      return table;
    });

};
