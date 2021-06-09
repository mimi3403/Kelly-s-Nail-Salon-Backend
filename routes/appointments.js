const express = require('express');
const router = express.Router();
const apptController = require('../controllers/appointments');

router.get('/', apptController.index);
router.post('/', apptController.create);
router.put('/:id', apptController.update);



module.exports = router;


