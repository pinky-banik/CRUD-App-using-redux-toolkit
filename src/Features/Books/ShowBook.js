import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { deleteBook } from './BooksSlice';

const ShowBook = () => {
    const books = useSelector((state)=>state.booksReducer.books);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const handleDelete = (id) =>{
        dispatch(deleteBook(id));
        console.log(id);
    }
    return (
        <div className='text-center flex  justify-center items-center min-h-screen'>
            <div>
            <h2 className='text-lg my-5'>List of Books</h2>
            <table className="table-bordered">
                <thead className="gap-3">
                    <tr >
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className ="text-sm">
                    {
                        books && books.map((book)=>{
                            const {id,title,author}=book;
                            return (<tr key={id} className ="my-5">
                                <td className="px-5 my-2">{title}</td>
                                <td className="px-5 my-2">{author}</td>
                                <td className="flex gap-2 px-5 my-2">
                                    <Link to="/edit-book" state={{id,title,author}}className="bg-green-800 text-white p-1 btn  rounded">Edit</Link>
                                    <button onClick={()=>{handleDelete(id)}} className="bg-red-800 text-white p-1 btn  rounded">Delete</button>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
            </table> 
            </div>
        </div>
    );
};

export default ShowBook;