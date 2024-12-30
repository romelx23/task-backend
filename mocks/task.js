const mockTaskModel = {
  toJSON: jest.fn().mockImplementation(function () {
    const { __v, _id, ...task } = this.toObject(); //eslint-disable-line
    task.id = _id;
    return task;
  }),
  save: jest.fn().mockResolvedValue({
    title: 'Nueva tarea',
    description: 'Descripción de la nueva tarea',
    completed: false,
    createdAt: new Date(),
    id: 'nuevoid',
  }),
  find: jest.fn().mockResolvedValue([
    {
      completed: true,
      title: 'Tarea 10',
      description: 'tarea 10',
      createdAt: '2024-12-28T23:07:46.467Z',
      id: '677084c2dfaa4632c87ab33f',
    },
    {
      completed: false,
      title: 'alimentar al gato',
      description: 'alimentar al gato x2',
      createdAt: '2024-12-28T23:26:57.030Z',
      id: '67708941c388c51b48509cdb',
    },
  ]),
  findById: jest.fn().mockResolvedValue({
    completed: true,
    title: 'Tarea 10',
    description: 'tarea 10',
    createdAt: '2024-12-28T23:07:46.467Z',
    id: '677084c2dfaa4632c87ab33f',
  }),
};

module.exports = {
  model: jest.fn(() => ({
    deleteMany: jest.fn().mockResolvedValue({}),
    find: mockTaskModel.find,
    findById: mockTaskModel.findById,
    save: mockTaskModel.save,
  })),
};