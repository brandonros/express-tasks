const { queryDatabase } = require('../lib/database.js')

module.exports = async (req, res) => {
  const sql = 'SELECT status FROM tasks WHERE task_id = $taskId'
  const bindings = {
    $taskId: req.params.taskId
  }
  const [task] = await queryDatabase(sql, bindings)
  if (!task) {
    throw new Error('Task not found')
  }
  return {
    statusCode: 200,
    body: {
      status: task.status
    }
  }
}
