import express from "express";
import connectDB from "./db/connection";
import Book from "./models/Book";
import router from "./routes/bookRoutes";

dotenv.config();

const app = express();

//middleware
app.use(express.json());

//DB Connect
connectDB();

//routes
app.use('/api/books', booksRoutes);

// server start
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});