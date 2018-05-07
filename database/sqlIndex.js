const pgp = require('pg-promise')();

module.exports = pgp('postgres://andrew@localhost:5432/welp');
