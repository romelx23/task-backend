const { Schema, model } = require('mongoose')

const TaskSchema = Schema({
  title: {
    type: String,
    required: [true, 'El título es obligatorio']
  },
  description: {
    type: String
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

TaskSchema.methods.toJSON = function () {
  const { __v, _id, ...task } = this.toObject(); //eslint-disable-line
  task.id = _id
  return task
}

const Task = model('Task', TaskSchema)
module.exports = Task
