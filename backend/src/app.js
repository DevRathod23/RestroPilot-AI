const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Health check endpoint (Jo humne test kiya hai)
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'success', message: 'API is running perfectly!' });
});

module.exports = app;