const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../database/connection')
const morgan = require('morgan')
const swaggerUi = require('swagger-ui-express')
const { swaggerSpec } = require('./swagger')

class Server {
  constructor (connected=true) {
    this.app = express()
    this.port = process.env.PORT

    this.paths = {
      task: '/api/tasks'
    }

    // Morgan
    this.app.use(morgan('dev'))

    
    if(connected) {
      console.log("Conectando a la base de datos");
      this.conectarDB()
    }
    
    this.middleware()
    
    this.routes()
    
    this.app.use(express.static('public'))
    
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  }

  async conectarDB () {
    await dbConnection()
  }

  middleware () {
    this.app.use(express.static('public'))
    this.app.use(express.json())
    this.app.use(cors())
  }

  routes () {
    this.app.use(this.paths.task, require('../modules/task/task.routes'))
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log('servidor corriendo el puerto ', this.port)
    })
  }
}

module.exports = Server
