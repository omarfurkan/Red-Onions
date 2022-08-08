import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo2.png'

const Header = () => {
    return (
        <div className='mx-auto w-5/6'>
            <nav className='h-12 flex justify-between'>
                <div className='w-28 mt-2'>
                    <img className='w-full' src={logo} alt="" />
                </div>
                <div className='text-xl font-semibold mt-2'>
                    <Link to='/' className='mr-4'> Home </Link>
                    <Link to='/login'> Login </Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;