const express = require('express');
const contactsRoutes = require('./routes/contacts');
const mongodb = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

// Middleware
app.use(express.json());

// Connect to MongoDB
mongodb.initDb((err) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    else {
        console.log('Database initialized');
    }
});

// Set up routes
app.get('/', (req, res) => {
    res.send('Welcome to the Contacts API');
});
app.use('/api/contacts', contactsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});