const express=require('express')
const router=express.Router()
const {getBook,getBooks,createBook,updateBook,deleteBook}=require('../controllers/bookController')

router.route('/').post(createBook).get(getBooks)
router.route('/:id').get(getBook).put(updateBook).delete(deleteBook)


module.exports=router
