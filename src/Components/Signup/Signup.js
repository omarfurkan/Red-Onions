import React, { useRef } from 'react';
import backgroundImg from '../../Images/signlog.png';
import logo from '../../Images/logo2.png'
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebases.init';

const Signup = () => {
    const navigate = useNavigate();
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const [createUserWithEmailAndPassword, user, loading, error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSumbit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        console.log(name, email, password, confirmPassword)

        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password)
        }
    }


    return (
        <div style={{ background: `url(${backgroundImg})`, backgroundSize: 'cover', height: '100%' }}>
            <div className='mx-auto w-2/6 pt-40 pb-32'>
                <div className='block mx-auto mb-24'>
                    <img className='h-24' src={logo} alt="" />
                </div>
                <form onSubmit={handleSumbit}>
                    <div>
                        <input ref={nameRef} className='w-full rounded-lg my-2 py-4 px-4 text-lg' type="text" name='name' placeholder='Name' />
                        <br />
                        <input ref={emailRef} className='w-full rounded-lg my-2 py-4 px-4 text-lg' type="email" name="eamil" id="" placeholder='Email' />
                        <br />
                        <input ref={passwordRef} className='w-full rounded-lg my-2 py-4 px-4 text-lg' name="password" id="" placeholder='Password' type="password" />
                        <br />
                        <input ref={confirmPasswordRef} className='w-full rounded-lg my-2 py-4 px-4 text-lg' type="password" name="confirmPassword" id="" placeholder='Confirm Password' />
                        <br />
                        {error && <p className='text-red-500 font-semibold'>{error.message}</p>}
                        <input className='bg-red-500 w-full rounded-lg my-2 py-4 px-4 text-lg text-white' type="submit" value="Sign up" />
                    </div>
                </form>
                <p onClick={() => navigate('/login')} className='text-red-500 text-center cursor-pointer'>Already have an Accout</p>
            </div>
        </div>
    );
};

export default Signup;