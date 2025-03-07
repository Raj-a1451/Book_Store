const mongoose=require('mongoose')

const Book=mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        publishYear:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
)

module.exports=mongoose.model('book',Book)