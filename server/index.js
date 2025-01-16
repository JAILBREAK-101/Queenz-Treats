const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());

// Hero Section Images Routes
app.get('/hero-images', (req, res) => {
    // TODO: Retrieve and send the HERO Section Images
    res.status(200).json({ message: 'Hero Section Images' });
})

// Contact Form Submission Route
app.post('/contact', (req, res) => {
    // TODO: Process contact form submission and send email
    res.status(200).json({message: 'Contact form submitted'});
});

// Dish Schema and Model
const dishSchema = new mongoose.Schema({
    picture: String,
    name: String,
    description: String,
    price: Number,  // Price in Naira or changes based on location
});

const Dish = mongoose.model('Dish', dishSchema);

// Our Dishes Route
app.get('/dishes', async (req, res) => {
    // TODO: Retrieve and send list of dishes
    const dishes = await Dish.find();
    res.status(200).json({dishes: dishes, message: 'Dishes sent'});
});

// Dedicated Dish Page or Contact Form Route
app.get('/dishes/:id', async (req, res) => {
    // TODO: Retrieve and send dish details or render contact form for order
    const dishId = req.params.id;
    const dish = await Dish.findById(dishId);
    res.status(200).json({dish: dish, message: 'Dish details sent'});
});

// Payment Integration Placeholder (for ordering dishes)
app.post('/order', (req, res) => {
    // TODO: Handle order and payment processing
    res.status(200).json({message: 'Order and Payment processed'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
