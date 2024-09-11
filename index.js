const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Users routes
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

// Todos routes
const todosRouter = require('./routes/todos');
app.use('/todos', todosRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

 