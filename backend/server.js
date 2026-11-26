const contactRoutes = require('./routes/contactRoutes');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
    res.send('My Portfolio Backend is Running!');
});

// const PORT = 5000;
const PORT = process.env.PORT || 5000;

// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log('MongoDB Connected Successfully!'))
//     .catch((err) => console.log(err));
const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);
mongoose.connect(process.env.MONGO_URI, {
    family: 4
})
    .then(() => console.log('MongoDB Connected Successfully!'))
    .catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});