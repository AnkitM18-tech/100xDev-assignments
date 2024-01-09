/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(bodyParser.json());

function findIndex(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      return i;
    }
  }
  return -1;
}

function removeAtIndex(arr, index) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) newArray.push(arr[i]);
  }
  return newArray;
}

let todos = [];

app.get("/todos", (req, res) => {
  /* fs.readFile(path.join(__dirname, "./todos.json"), "utf-8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  }); */
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  /* fs.readFile(path.join(__dirname, "./todos.json"), "utf-8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    const index = findIndex(todos, parseInt(req.params.id));
    if (index === -1) {
      res.status(404).send();
    } else {
      res.status(200).json(todos[index]);
    }
  }); */
  const todoId = todos.findIndex((todo) => todo.id === parseInt(req.params.id));
  if (todoId === -1) {
    return res.status(404).send("Not Found");
  }
  res.status(200).json(todos[todoId]);
});

app.post("/todos", (req, res) => {
  let id = Math.floor(Math.random() * 1000000);
  const newTodo = {
    id: id,
    title: req.body.title,
    description: req.body.description,
  };
  todos.push(newTodo);
  /* fs.readFile(path.join(__dirname, "./todos.json"), "utf-8", (err, data) => {
    if (err) throw err;
    let todos = JSON.parse(data);
    todos.push(newTodo);
    fs.writeFile(
      path.join(__dirname, "./todos.json"),
      JSON.stringify(todos),
      (err) => {
        if (err) throw err;
        res.status(201).json(newTodo);
      }
    );
  }); */
  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  /* fs.readFile(path.join(__dirname, "./todos.json"), "utf-8", (err, data) => {
    if (err) throw err;
    let todos = JSON.parse(data);
    let todoIndex = findIndex(todos, parseInt(req.params.id));
    if (todoIndex === -1) {
      return res.status(404).send("Not Found");
    } else {
      const updatedTodo = {
        id: todos[todoIndex].id,
        title: req.body.title,
        description: req.body.description,
      };
      todos[todoIndex] = updatedTodo;
      fs.writeFile(
        path.join(__dirname, "./todos.json"),
        JSON.stringify(todos),
        (err) => {
          if (err) throw err;
          res.status(200).json(updatedTodo);
        }
      );
    }
  }); */
  const todoId = todos.findIndex((todo) => todo.id === parseInt(req.params.id));
  if (todoId === -1) {
    return res.status(404).send("Not Found");
  }
  todos[todoId].title = req.body.title;
  todos[todoId].description = req.body.description;
  todos[todoId].completed = req.body.completed;
  res.status(200).json(todos[todoId]);
});

app.delete("/todos/:id", (req, res) => {
  /* fs.readFile(path.join(__dirname, "./todos.json"), "utf-8", (err, data) => {
    if (err) throw err;
    let todos = JSON.parse(data);
    let todoIndex = findIndex(todos, parseInt(req.params.id));
    if (todoIndex === -1) {
      return res.status(404).send("Not Found");
    } else {
      todos = removeAtIndex(todos, todoIndex);
      fs.writeFile(
        path.join(__dirname, "./todos.json"),
        JSON.stringify(todos),
        (err) => {
          if (err) throw err;
          res.status(200).json(todos);
        }
      );
    }
  }); */
  const todoId = todos.findIndex((todo) => todo.id === parseInt(req.params.id));
  if (todoId === -1) {
    return res.status(404).send("Not Found");
  }
  todos.splice(todoId, 1);
  res.status(200).json(todos);
});

app.use((req, res, next) => {
  res.status(404).send("Route not found");
});

module.exports = app;
