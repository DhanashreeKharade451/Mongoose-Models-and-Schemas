import express from "express";
import Book from "../models/Book.js";

const router = express.Router();

//create post
router.post('/', async(req,res) => {
  const book = new Book(req.body);
  const savedBook = await book.save();
  res.status(201).json(savedBook);
});

// READ ALL (GET)
router.get('/', async(req,res) => {
    try{
        const books = await Book.find();
        res.json(books);
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

//// READ ONE (GET by ID)
router.get('/:id', async (req,res) => {
    try{
        const book =await Book.findById(req.params.id);
        if(!book) {
            return res.status(404).json({
                message: "Book not found"
            });
            res.json(book);

        }
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

// UPDATE (PUT)

router.put('/:id', async (req,res) => {
    try{
        const updateBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        res.json(updateBook);
    }catch(error){
        res.status(400).json({error:error.message});
    }
});

//Delete

router.delete('/:id', async (req,res) =>{
    try{
        await Book.findByIdAndDelete(req.params.id);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
});

export default router;