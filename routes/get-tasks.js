const { queryDatabase } = require('../lib/database.js')

module.exports = async (req, res) => {
  const sql = 'SELECT * FROM tasks'
  const results = await queryDatabase(sql)
  return {
    statusCode: 200,
    body: results
  }
}
