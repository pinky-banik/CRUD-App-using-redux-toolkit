import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-center items-center py-5 bg-blue-400 text-red-600 font-bold'>
            <Link className='mx-3 focus:underline' to="/">Home</Link>
            <Link className='mx-3 focus:underline' to="/show-book">Show Books</Link>
            <Link className='mx-3 focus:underline' to="/add-book">Add Books</Link>
        </div>
    );
};

export default Navbar;