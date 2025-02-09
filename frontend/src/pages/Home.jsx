import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Spinner from '../component/Spinner'
import { MdAddCircleOutline } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";


const Home = () => {

    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:5000/books')
            .then((res) => {
                console.log(res.data.data)
                setBooks(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        console.log(books); // This will log the updated books
    }, [books]);

    return (
        <div className='p-4'>
            <div className='flex justify-between mt-4'>
                <h1 className='text-3xl'>Book List</h1>
                <Link
                    to='/books/create' className=''>
                    <MdAddCircleOutline className=' text-4xl text-lime-500' />
                </Link>
            </div>
            {loading? (<Spinner/>):(
            <table className='w-full border-separate border-spacing-2 '>
                <thead>
                    <tr>
                    <th className='border border-slate-600 rounded-md'>SL NO</th>
                    <th className='border border-slate-600 rounded-md'>Title</th>
                    <th className='border border-slate-600 rounded-md'>Author</th>
                    <th className='border border-slate-600 rounded-md'>Publish Year</th>
                    <th className='border border-slate-600 rounded-md'>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book,index)=>(
                        <tr key={book._id}>
                            <td className='border border-slate-600 rounded-md text-center'>{index+1}</td>
                            <td className='border border-slate-600 rounded-md text-center'>{book.title}</td>
                            <td className='border border-slate-600 rounded-md text-center'>{book.author}</td>
                            <td className='border border-slate-600 rounded-md text-center'>{book.publishYear}</td>
                            <td className='border border-slate-600 rounded-md text-center'>
                                <div className='flex justify-center gap-x-4'>
                                    <Link to={`/books/show/${book._id}`}>
                                    <IoIosInformationCircleOutline className='text-blue-700'/>
                                    </Link>
                                    <Link to={`/books/edit/${book._id}`}>
                                    <MdOutlineModeEdit className='text-yellow-400'/>
                                    </Link>
                                    <Link to={`/books/delete/${book._id}`}>
                                    <RiDeleteBin6Line className='text-red-800'/>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            )}
        </div>
    )
}

export default Home