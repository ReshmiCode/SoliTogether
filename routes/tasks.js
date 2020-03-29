const express = require('express');
const router = express.Router();
const { getTask, addTask, deleteTask } = require('../controllers/task_controller');

router
    .route('/')
    .get(getTask)
    .post(addTask);

router
    .route('/:id')
    .delete(deleteTask);

module.exports = router;