const User = require('../models/user_model');

exports.getUser = async (req, res, next) => {
    try {
        const users = await User.find();

        return res.status(200).json({
            success: true,
            count: users.length,
            data: users
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.addUser = async (req, res, next) => {
    try {
        const { phoneNo, tasks } = req.body;

        const user = await User.create(req.body);

        return res.status(201).json({
            success: true,
            data: user
        });
    } catch (error) {
        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
        
            return res.status(400).json({
                success: false,
                error: messages
            });

        } 
        
        else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}

exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if(!user){
            return res.status(404).json({
                success: false,
                error: 'No user found'
            });
        }

        await user.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.getTask = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        return res.status(200).json({
            success: true,
            count: user.tasks.length,
            data: user.tasks
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.addTask = async (req, res, next) => {
    try {
        const { name } = req.body;

        const user = await User.findById(req.params.id);

        await user.tasks.push(req.body);
        await user.save();

        return res.status(201).json({
            success: true,
            data: user.tasks
        });
    } catch (error) {
        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
        
            return res.status(400).json({
                success: false,
                error: messages
            });

        } 
        
        else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}

exports.deleteTask = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if(!user){
            return res.status(404).json({
                success: false,
                error: 'No user found'
            });
        }

        if(user.tasks.length == 0){
            return res.status(404).json({
                success: false,
                error: 'No tasks found'
            });
        }  

        await user.tasks.pull({_id: req.params.id2});
        await user.save();

        return res.status(200).json({
            success: true,
            data: user.tasks
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.getPN = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        return res.status(200).json({
            success: true,
            data: user.phoneNo
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.addPN = async (req, res, next) => {
    try {
        const { phoneNo } = req.body;

        const user = await User.findById(req.params.id);

        user.phoneNo = req.body.phoneNo;

        user.save();

        return res.status(201).json({
            success: true,
            data: user.phoneNo
        });
    } catch (error) {
        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
        
            return res.status(400).json({
                success: false,
                error: messages
            });

        } 
        
        else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}

exports.deletePN = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if(!user){
            return res.status(404).json({
                success: false,
                error: 'No user found'
            });
        }

        const pn = user.phoneNo;
        
        if(pn == "null"){
            return res.status(404).json({
                success: false,
                error: 'No phone number found'
            });
        }

        user.phoneNo = "null";

        user.save();

        return res.status(200).json({
            success: true,
            data: user.phoneNo
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}