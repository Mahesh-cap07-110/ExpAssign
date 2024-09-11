
// Update a todo
router.put('/:id', (req, res) => {
    const index = todos.findIndex(t => t.id === req.params.id);
    if (index !== -1) {
      todos[index] = { ...todos[index], ...req.body };
      res.json(todos[index]);
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  });
  
  // Delete a todo
  router.delete('/:id', (req, res) => {
    const index = todos.findIndex(t => t.id === req.params.id);
    if (index !== -1) {
      todos.splice(index, 1);
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  });
  
  module.exports = router;