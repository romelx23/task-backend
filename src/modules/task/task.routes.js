const { Router } = require('express')
const { check } = require('express-validator')
const { getTasks, getTaskById, createTask, updateTask, deleteTask } = require('./task.controller')
const { validateFields } = require('../../middlewares/validate-fields')

const router = Router()

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     tags:
 *       - Tasks
 *     summary: Retrieve a list of tasks
 *     parameters:
 *       - in: query
 *         name: completed
 *         schema:
 *           type: boolean
 *         description: Filter tasks by completion status
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Limit the number of tasks returned
 *       - in: query
 *         name: from
 *         schema:
 *           type: integer
 *         description: Skip the first n tasks
 *     responses:
 *       200:
 *         description: A list of tasks
 */
router.get('/', [validateFields], getTasks)

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     tags:
 *       - Tasks
 *     summary: Retrieve a single task by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The task ID
 *     responses:
 *       200:
 *         description: A single task
 *       404:
 *         description: Task not found
 */
router.get('/:id', [validateFields], getTaskById)

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     tags:
 *       - Tasks
 *     summary: Create a new task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Task created
 *       400:
 *         description: Invalid input
 */
router.post('/', [
  check('title', 'El título es obligatorio').not().isEmpty(),
  validateFields
], createTask)

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     tags:
 *       - Tasks
 *     summary: Update an existing task
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The task ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Task updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Task not found
 */
router.put('/:id', [
  check('title', 'El título es obligatorio').not().isEmpty(),
  validateFields
], updateTask)

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     tags:
 *       - Tasks
 *     summary: Delete a task by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The task ID
 *     responses:
 *       200:
 *         description: Task deleted
 *       404:
 *         description: Task not found
 */
router.delete('/:id', [validateFields], deleteTask)

module.exports = router
