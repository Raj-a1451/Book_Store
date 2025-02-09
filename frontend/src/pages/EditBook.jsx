import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate ,useParams} from 'react-router-dom'
import { useSnackbar } from 'notistack'
import BackButton from '../component/BackButton'
import Spinner from '../component/Spinner'
const EditBook = () => {
  const [title,setTitle]=useState('')
  const [author,setAuthor]=useState('')
  const [publishYear,setPublishYear]=useState('')
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const {enqueueSnackbar}=useSnackbar()
  const {id}=useParams()
  useEffect(()=>{
      setLoading(true)
      axios.get(`http://localhost:5000/books/${id}`)
      .then((res)=>{
          setTitle(res.data.title)
          setAuthor(res.data.author)
          setPublishYear(res.data.publishYear)
          setLoading(false)
      })
      .catch((err)=>{
        console.log(err)
        setLoading(false)
        enqueueSnackbar('An error occured',{variant:'error'})
        navigate('/')
      })
  },[])
  const update=()=>{
    setLoading(true)
    const book={title,author,publishYear}
    axios.put(`http://localhost:5000/books/${id}`,book)
    .then(()=>{
        setLoading(false)
        enqueueSnackbar('Successfully updated',{variant:'success'})
        navigate('/')
    })
    .catch((err)=>{
      console.log(err)
      setLoading(false)
      enqueueSnackbar('Error',{variant:'error'})
    })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-center text-3xl'>Edit Book</h1>
      {loading ? (<Spinner/>):''}
      <div className='flex flex-col border-2 border-sky-600 mx-auto w-[500px] p-4 my-2'>
            <div className='my-2'>
                <label className='text-gray-600 text-xl'>Title</label>
                <input 
                type="text" 
                className='border-2 border-gray-400 w-full p-2 rounded-md'
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
                />
            </div>
            <div className='my-2'>
                <label className='text-gray-600 text-xl'>Author</label>
                <input 
                type="text" 
                className='border-2 border-gray-400 w-full p-2 rounded-md'
                value={author}
                onChange={(e)=>{setAuthor(e.target.value)}}
                />
            </div>
            <div className='my-2'>
                <label className='text-gray-600 text-xl'>Publish Year</label>
                <input 
                type="text" 
                className='border-2 border-gray-400 w-full p-2 rounded-md'
                value={publishYear}
                onChange={(e)=>{setPublishYear(e.target.value)}}
                />
            </div>
            <button className='w-1/2 text-xl bg-green-700 rounded-lg p-2 my-1 mx-auto text-white'
            onClick={update}
            >
                Update
            </button>
        </div>
    </div>
  )
}

export default EditBook