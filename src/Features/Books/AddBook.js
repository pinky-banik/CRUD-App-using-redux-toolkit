import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './BooksSlice';
import { useNavigate } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

const AddBook = () => {
    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const numberofBooks = useSelector((state)=>state.booksReducer.books.length);


    const handleSubmit= e =>{
        e.preventDefault();
        const book ={id:numberofBooks +1,title,author};
        dispatch(addBook(book));
        setTitle("");
        setAuthor("");
        navigate('/show-book');
    }
    return (
        <div className='flex justify-center items-center text-center my-2 min-h-screen'>
            <div>
            <h2 className='my-5 text-xl font-bold'>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-field ">
                    <label htmlFor="title">Title: </label>
                    <input type="text" id = "title" name ="title" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
                </div>
                <div className="form-field my-2">
                    <label htmlFor="author">Author: </label>
                    <input type="text" id = "author" name ="author" value={author} onChange={(e)=>setAuthor(e.target.value)} required/>
                </div>
                <button type='submit' className='bg-green-700 text-white px-3 py-2 rounded my-5'>SUBMIT</button>
            </form>
            </div>
        </div>
    );
};

export default AddBook;