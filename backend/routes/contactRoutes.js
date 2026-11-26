const express = require('express');
const router = express.Router();

// const Contact = require('../models/Contact');
const Contact = require('../models/Contact');

// Save contact message
router.post('/', async (req, res) => {
    try {
        const newContact = new Contact({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });

        await newContact.save();

        res.status(201).json({
            message: 'Message sent successfully!'
        });

    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong!'
        });
    }
});

module.exports = router;