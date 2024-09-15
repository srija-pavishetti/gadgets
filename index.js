require("dotenv").config();
const express = require('express');
const cors = require('cors');
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/Auth");
const productRoutes = require("./routes/Product");
const orderRoutes = require("./routes/Order");
const cartRoutes = require("./routes/Cart");
const brandRoutes = require("./routes/Brand");
const categoryRoutes = require("./routes/Category");
const userRoutes = require("./routes/User");
const addressRoutes = require('./routes/Address');
const reviewRoutes = require("./routes/Review");
const wishlistRoutes = require("./routes/Wishlist");
const { connectToDB } = require("./database/db");

// Server initialization
const server = express();

// Database connection
connectToDB();

// CORS configuration
const corsOptions = {
    origin: process.env.ORIGIN, // Replace with the frontend URL
    methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Allowed methods
    credentials: true, // Enable cookies and authorization headers
    exposedHeaders: ['X-Total-Count'], // Expose custom headers
};

server.use(cors(corsOptions));

// Middleware setup
server.use(express.json());
server.use(cookieParser());
server.use(morgan("tiny"));

// Route Middleware
server.use("/auth", authRoutes);
server.use("/users", userRoutes);
server.use("/products", productRoutes);
server.use("/orders", orderRoutes);
server.use("/cart", cartRoutes);
server.use("/brands", brandRoutes);
server.use("/categories", categoryRoutes);
server.use("/address", addressRoutes);
server.use("/reviews", reviewRoutes);
server.use("/wishlist", wishlistRoutes);

// Basic route for testing
server.get("/", (req, res) => {
    res.status(200).json({ message: 'Server is running' });
});

// Error handling middleware (optional but recommended)
server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
server.listen(8000, () => {
    console.log('Server [STARTED] ~ http://localhost:8000');
});
