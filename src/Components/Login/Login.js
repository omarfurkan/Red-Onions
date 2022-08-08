import React from 'react';
import backgroundImg from '../../Images/signlog.png';
import logo from '../../Images/logo2.png'
import { useNavigate } from "react-router-dom";



const Login = () => {
    const navigate = useNavigate();
    return (
        <div style={{ background: `url(${backgroundImg})`, backgroundSize: 'cover', height: '100%' }}>
            <div className='mx-auto w-2/6 pt-40 pb-32'>
                <div className='block mx-auto mb-24'>
                    <img className='h-24' src={logo} alt="" />
                </div>
                <form >
                    <div>
                        <input className='w-full rounded-lg my-2 py-4 px-4 text-lg' type="text" name='name' placeholder='Name' />
                        <br />
                        <input className='w-full rounded-lg my-2 py-4 px-4 text-lg' type="email" name="eamil" id="" placeholder='Email' />
                        <br />
                        <input className='w-full rounded-lg my-2 py-4 px-4 text-lg' name="password" id="" placeholder='Pasword' />
                        <br />
                        <input className='w-full rounded-lg my-2 py-4 px-4 text-lg' type="password" name="confirm-password" id="" placeholder='Confirm Password' />
                        <br />
                        <input className='bg-red-500 w-full rounded-lg my-2 py-4 px-4 text-lg text-white' type="submit" value="Log In" />
                    </div>
                </form>
                <p onClick={() => navigate('/signup')} className='text-red-400 text-center hover:text-red-600 cursor-pointer'>Create an Account</p>
            </div>
        </div>
    );
};

export default Login;