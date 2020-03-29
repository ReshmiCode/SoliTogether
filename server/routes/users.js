const express = require('express');
const router = express.Router();
const { getUser, addUser, deleteUser, getTask, addTask, deleteTask, getPN, addPN, deletePN} = require('../controllers/user_controller');

router
    .route('/')
    .get(getUser)
    .post(addUser);

router
    .route('/:id')
    .delete(deleteUser);

router
    .route('/tasks/:id')
    .get(getTask)
    .post(addTask);

router
    .route('/pn/:id')
    .get(getPN)
    .post(addPN)
    .delete(deletePN);

router
    .route('/tasks/:id/:id2')
    .delete(deleteTask);

module.exports = router;