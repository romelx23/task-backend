const { request, response } = require('express')
const Task = require('./task.model')
const { createTaskSchema, updateTaskSchema } = require('./task.dto')

const getTasks = async (req = request, res = response) => {
  const { completed, limit = 50, from = 0 } = req.query
  const query = completed !== undefined ? { completed: completed === 'true' } : {}
  const [total, tasks] = await Promise.all([
    Task.countDocuments(query),
    Task.find(query)
      .skip(Number(from))
      .limit(Number(limit))
  ])
  res.json({
    total,
    tasks
  })
}

const getTaskById = async (req = request, res = response) => {
  const { id } = req.params
  try {
    const task = await Task.findById(id)
    if (!task) {
      return res.status(404).json({
        msg: 'Tarea no encontrada'
      })
    }
    res.json({
      task
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Error interno del servidor'
    })
  }
}

const createTask = async (req = request, res = response) => {
  const { error, value } = createTaskSchema.validate(req.body)
  if (error) {
    return res.status(400).json({ error: error.details[0].message })
  }
  const data = {
    ...value
  }
  const task = new Task(data)
  await task.save()
  res.status(201).json(task)
}

const updateTask = async (req = request, res = response) => {
  const { id } = req.params
  const { error, value } = updateTaskSchema.validate(req.body)
  if (error) {
    return res.status(400).json({ error: error.details[0].message })
  }
  const task = await Task.findByIdAndUpdate(id, value, { new: true })
  res.json(task)
}

const deleteTask = async (req = request, res = response) => {
  const { id } = req.params
  const task = await Task.findByIdAndDelete(id)
  res.json({
    msg: 'Tarea eliminada',
    task
  })
}

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
}
