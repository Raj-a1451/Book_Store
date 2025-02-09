import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import BackButton from '../component/BackButton'
import Spinner from '../component/Spinner'

const DeleteBook = () => {
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const {enqueueSnackbar}=useSnackbar()
  const {id}=useParams()
  const remove=()=>{
      setLoading(true)
      axios.delete(`http://localhost:5000/books/${id}`)
      .then(()=>{
        setLoading(false)
        enqueueSnackbar('Successfully deleted',{variant:'success'})
        navigate('/')
      })
      .catch((err)=>{
        console.log(err)
        setLoading(false)
        enqueueSnackbar("Error occured",{variant:'error'})
      })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-center text-3xl'>Delete Book</h1>
      {loading? (<Spinner/>):''}
      <div className='w-1/2 mx-auto border-2 border-gray-400 p-4 rounded-lg text-center'>
        <span className='text-2xl'>Do you want to delete this book?</span>
        <button className='bg-red-600 text-white mx-auto w-1/2 mt-4 h-8'
        onClick={remove}>
            Delete
        </button>
      </div>
    </div>
  )
}

export default DeleteBook