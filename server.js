import express from "express";
import dotenv from 'dotenv'
import connectDB from "./db/connection.js";
import Book from "./models/Book.js";
import bookRoutes from "./routes/bookRoutes.js";

dotenv.config();

const app = express();

//middleware
app.use(express.json());

//DB Connect
connectDB();

//routes
app.use('/api/books', bookRoutes);

// server start
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});