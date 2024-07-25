// queries.js

const Pool = require('pg').Pool;

const pool = new Pool({
  host: 'cbec45869p4jbu.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com',
  database: 'd87l3tgcfp8khn',
  port: '5432',
  user: 'ube7c5dk497i19',
  password: 'pef2eff95f1eaf27a96893daebe2d8b6f27770f24221df086e371c52b40bb2024',
});


const executeQuery = async (query) => {
  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error('Error executing query', error.stack);
    throw error;
  }
};

module.exports = {
  executeQuery,
};