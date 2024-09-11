// Update a user
router.put('/:id', (req, res) => {
    const index = users.findIndex(u => u.id === req.params.id);
    if (index !== -1) {
      users[index] = { ...users[index], ...req.body };
      res.json(users[index]);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
  
  // Delete a user
  router.delete('/:id', (req, res) => {
    const index = users.findIndex(u => u.id === req.params.id);
    if (index !== -1) {
      users.splice(index, 1);
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
  
  module.exports = router;