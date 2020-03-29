const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    phoneNo: {
        type: String,
        default: "null"
    },

    tasks: [
            {
                
                name: {
                type: String,
                required: [true, 'Please add a name']
            
                },

                dateAdded: {
                    type: Date,
                    default: Date.now
                }
                
            
        }
    ]
});

module.exports = mongoose.model('User', UserSchema);