const { Pool } = require('pg');

let connect = async function () {
  try {
    if (global.connection) {
      return Promise.resolve(global.connection);
    }

    const pool = new Pool({
      connectionString: 'postgres://ejtkbwuw:GxjpETH6DI-7Qo6TKZAUvFw7chofWO5c@silly.db.elephantsql.com/ejtkbwuw/timao'
    });

    global.connection = pool;
    return Promise.resolve(pool);
  } catch (error) {
    console.error('Erro ao estabelecer a conexão:', error);
    throw error;
  }
};

module.exports = { connect };
