# Task Backend

This is a backend service for managing tasks. It provides RESTful APIs to create, read, update, and delete tasks.

## Features

- Create a new task
- Retrieve a list of tasks
- Retrieve a single task by ID
- Update an existing task
- Delete a task by ID

## Technologies

- Node.js
- Express
- Mongoose
- Joi
- Swagger
- Jest
- Supertest

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/romelx23/task-backend.git
   ```
2. Navigate to the project directory:
   ```sh
   cd task-backend
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the server:
   ```sh
   npm start
   ```
2. The server will be running at `http://localhost:8080`.

## Running Tests

1. Run the tests:
   ```sh
   npm test
   ```

## API Endpoints

### Create a new task

- **URL:** `/api/tasks`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "title": "Task title",
    "description": "Task description",
    "completed": false
  }
  ```
- **Responses:**
  - `201 Created`: Task created successfully
  - `400 Bad Request`: Invalid input

### Retrieve a list of tasks

- **URL:** `/api/tasks`
- **Method:** `GET`
- **Query Parameters:**
  - `completed` (optional): Filter tasks by completion status
  - `limit` (optional): Limit the number of tasks returned
  - `from` (optional): Skip the first n tasks
- **Responses:**
  - `200 OK`: A list of tasks

### Retrieve a single task by ID

- **URL:** `/api/tasks/{id}`
- **Method:** `GET`
- **Responses:**
  - `200 OK`: A single task
  - `404 Not Found`: Task not found

### Update an existing task

- **URL:** `/api/tasks/{id}`
- **Method:** `PUT`
- **Request Body:**
  ```json
  {
    "title": "Updated title",
    "description": "Updated description",
    "completed": true
  }
  ```
- **Responses:**
  - `200 OK`: Task updated successfully
  - `400 Bad Request`: Invalid input
  - `404 Not Found`: Task not found

### Delete a task by ID

- **URL:** `/api/tasks/{id}`
- **Method:** `DELETE`
- **Responses:**
  - `200 OK`: Task deleted successfully
  - `404 Not Found`: Task not found

## Swagger Documentation

The API documentation is available at `http://localhost:8080/api-docs`.

## License

This project is licensed under the MIT License.
