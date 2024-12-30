const swaggerJSDoc = require('swagger-jsdoc')
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API Documentation',
      version: '1.0.0',
      description: 'API documentation for my Express application'
    },
    servers: [
      {
        url: 'http://localhost:8080',
        description: 'Local server'
      }
    ],
    tags: [
      {
        name: 'Tasks',
        description: 'Tasks API'
      }
    ],
    schemes: ['http'],
    host: 'localhost:8080',
    basePath: '/api',
  },
  apis: ["src/**/*.js"],
}
const swaggerSpec = swaggerJSDoc(swaggerOptions)
module.exports = { swaggerSpec }