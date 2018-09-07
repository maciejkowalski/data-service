const { pg, redis } = require('./driver');
const createAdapter = require('./adapter');

// adapter dependencies
const { toDbError } = require('../errorHandling');
const sql = require('./sql');

module.exports = {
  createPgDriver: pg,
  createRedisDriver: redis,
  createAdapter: driver =>
    createAdapter({
      taskedDbDriver: driver,
      errorFactory: toDbError,
      sql,
    }),
};
