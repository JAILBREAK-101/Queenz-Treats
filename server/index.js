// Import required modules
const express = require('express');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();

// Connect to MongoDB (replace 'your_mongo_uri' with your MongoDB connection string)
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Middleware for parsing JSON
app.use(express.json());

// Hero Section Images Route (Placeholder for actual code)
app.get('/hero-images', (req, res) => {
    // TODO: Retrieve and send hero section images
    res.send('Hero Section Images');
});

// Contact Form Submission Route
app.post('/contact', (req, res) => {
    // TODO: Process contact form submission and send email
    res.send('Contact form submitted');
});

// Dish Schema and Model
const dishSchema = new mongoose.Schema({
    picture: String,
    name: String,
    description: String,
    price: Number,  // Price in Naira or dynamically based on location
});

const Dish = mongoose.model('Dish', dishSchema);

// Our Dishes Route
app.get('/dishes', async (req, res) => {
    // TODO: Retrieve and send list of dishes
    res.send('Dishes List');
});

// Dedicated Dish Page or Contact Form Route
app.get('/dishes/:id', async (req, res) => {
    // TODO: Retrieve and send dish details or render contact form for order
    res.send(`Dish Details for ID: ${req.params.id}`);
});

// Payment Integration Placeholder (for ordering dishes)
app.post('/order', (req, res) => {
    // TODO: Handle order and payment processing
    res.send('Order and Payment processed');
});

// Start the server (replace '3000' with your desired port)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
