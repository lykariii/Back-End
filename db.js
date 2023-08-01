const { Pool } = require('pg');

let connect = async function () {
  try {
    if (global.connection) {
      return Promise.resolve(global.connection);
    }

    const pool = new Pool({
      connectionString: 'postgres://jwzchxui:tqz-SFuYhUKaISwDtjDIL-Vi3d9q1wpi@silly.db.elephantsql.com/jwzchxui/loja'
    });

    global.connection = pool;
    return Promise.resolve(pool);
  } catch (error) {
    console.error('Erro ao estabelecer a conexão:', error);
    throw error;
  }
};

module.exports = { connect };
