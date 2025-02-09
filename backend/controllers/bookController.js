const asyncHandler=require('express-async-handler')
const mongoose=require('mongoose')
const Book=require('../models/bookModel')

const getBooks=asyncHandler(async(req,res)=>{
    const books=await Book.find()
    res.status(200).json({
        length:books.length,
        data:books
    })
})
const getBook=asyncHandler(async(req,res)=>{
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400);
        throw new Error("Invalid book ID");
    }
    const book=await Book.findById(req.params.id)
    if(!book){
        console.log('book not found')
        res.status(404)
        throw new Error("Book not found")
    }
    res.status(200).json(book)
})
const createBook=asyncHandler(async(req,res)=>{
    console.log(req.body)
    const {title,author,publishYear}=req.body
    if(!title || !author || !publishYear){
        res.status(400)
        throw new Error('Please provide all fields')
    }
    const book=await Book.create({title,author,publishYear})
    res.status(201).json(book)
})
const updateBook=asyncHandler(async(req,res)=>{
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400);
        throw new Error("Invalid book ID");
    }
    const book=Book.findById(req.params.id)
    if(!book){
        res.status(404)
        throw new Error('Book not found')
    }
    if(!req.body.title || !req.body.author || !req.body.publishYear){
        res.status(400)
        throw new Error('Please provide all fields')
    }
    const updatedBook=await Book.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(201).json(updatedBook)
})
const deleteBook=asyncHandler(async(req,res)=>{
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400);
        throw new Error("Invalid book ID");
    }
    const book=await Book.findById(req.params.id)
    if(!book){
        res.status(404)
        throw new Error('Book not found')
    }
    await Book.deleteOne(book)
    res.status(200).json(book)
})

module.exports={getBook,getBooks,createBook,updateBook,deleteBook}
