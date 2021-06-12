const express = require('express');
const router = express.Router();
const apptController = require('../controllers/appointments');

router.get('/', isAuthenticated, apptController.index);
router.post('/', apptController.create);
router.put('/:id', isAuthenticated, apptController.update);
router.delete('/:id', isAuthenticated, apptController.delete);

function isAuthenticated(req, res, next) {
  if (!req.query.uid) {
    return res.status(401).json({ error: 'user must be logged in' });
  }
  next();
}

module.exports = router;


