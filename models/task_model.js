const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Please add a title']
    },

    description: {
        type: String,
        required: [true, 'Please add a description']
    },

    dateAdded: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Task', TaskSchema);