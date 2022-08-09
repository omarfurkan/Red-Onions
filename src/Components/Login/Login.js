import React, { useRef } from 'react';
import backgroundImg from '../../Images/signlog.png';
import logo from '../../Images/logo2.png'
import { useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebases.init';
import { useEffect } from 'react';



const Login = () => {
    const navigate = useNavigate();
    let location = useLocation();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    let from = location.state?.from?.pathname || "/";

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);


    const handleSumbit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)

        signInWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, navigate, from])


    return (
        <div style={{ background: `url(${backgroundImg})`, backgroundSize: 'cover', height: '100%' }}>
            <div className='mx-auto w-2/6 pt-40 pb-72'>
                <div className='block mx-auto mb-24'>
                    <img className='h-24' src={logo} alt="" />
                </div>
                <form onSubmit={handleSumbit}>
                    <div>
                        <input ref={emailRef} className='w-full rounded-lg my-2 py-4 px-4 text-lg' type="email" name="eamil" id="" placeholder='Email' />
                        <br />
                        <input ref={passwordRef} className='w-full rounded-lg my-2 py-4 px-4 text-lg' name="password" id="" placeholder='Password' type="password" />
                        <br />
                        {error && <p className='text-red-500 font-semibold'>{error.message}</p>}
                        {loading && <p>Loading</p>}
                        <input className='bg-red-500 w-full rounded-lg my-2 py-4 px-4 text-lg text-white cursor-pointer' type="submit" value="Login" />
                    </div>
                </form>
                <p onClick={() => navigate('/signup')} className='text-red-500 text-center cursor-pointer'> Create an Account</p>
            </div>
        </div>
    );
};

export default Login;