const request = require('supertest');
const Server = require('../src/config/server');

// Mock de Mongoose (ya está importado y configurado en `jest.mock`)
jest.mock('mongoose', () => require('../mocks/task.js'));
describe('Task API', () => {
    let app;
    let taskId;
  
    // Configuración antes de ejecutar las pruebas
    beforeAll(() => {
      const server = new Server(false);
      app = server.app; // Inicializa la app sin iniciar el servidor
    });
  
    // Prueba para crear una tarea
    it('should create a new task', async () => {
      const res = await request(app)
        .post('/api/tasks')
        .send({
          title: 'Test Task',
          description: 'Test Description',
        });
      
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('title', 'Test Task');
      taskId = res.body.id; // Guarda el ID de la tarea creada para usarlo en otras pruebas
    });
  
    // Prueba para obtener una lista de tareas
    it('should retrieve a list of tasks', async () => {
      const res = await request(app).get('/api/tasks');
      
      expect(res.statusCode).toEqual(200);
      expect(res.body.tasks).toHaveLength(2); // Cambia la cantidad si es necesario
    });
  
    // Prueba para obtener una tarea por ID
    it('should retrieve a single task by ID', async () => {
      const res = await request(app).get(`/api/tasks/${taskId}`);
      
      expect(res.statusCode).toEqual(200);
      expect(res.body.task).toHaveProperty('title', 'Tarea 10');
    });
  });