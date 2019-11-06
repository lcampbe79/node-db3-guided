##Modular helpers
-create helpers folder in data
-require DB(db.config file)
-create helper functions

    module.exports = {
        find,
        findById
    }

    -function find() {
        return db('user')
    }
    //resolves to single user or null
    -function findById(id) {
        return db('users').where({id}).first()
    }
require above module (Users) from data/db-helper