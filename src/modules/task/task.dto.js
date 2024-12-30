const Joi = require('joi')

const createTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().optional(),
  completed: Joi.boolean().optional()
})

const updateTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().optional(),
  completed: Joi.boolean().optional()
})

module.exports = {
  createTaskSchema,
  updateTaskSchema
}
