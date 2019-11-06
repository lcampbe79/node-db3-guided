const db = require('../data/db-config');

module.exports = {
  find,
  findById
}

function find() {
  return db.select('*').from('users')
}

function findById(id) {
  return db('users')
  .where({ id })
  .first()
}