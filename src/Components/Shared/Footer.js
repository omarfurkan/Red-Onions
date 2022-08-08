import React from 'react';
import logo from '../../Images/logo.png'

const Footer = () => {
    return (
        <div className='bg-black  pt-20 pb-6'>
            <div className='flex w-5/6 mx-auto justify-between '>
                <div>
                    <img className='w-20' src={logo} alt="" />
                </div>
                <div className='grid grid-cols-2 gap-44 mr-24 text-white'>
                    <div>
                        <p>About Online food</p>
                        <p>Read our blod</p>
                        <p>Sign up to deliver</p>
                        <p>Add your resturent</p>
                    </div>
                    <div>
                        <p>Get help</p>
                        <p>Read FAQs</p>
                        <p>View all cities</p>
                        <p>Resturants near me</p>
                    </div>
                </div>
            </div>
            <div className='flex w-5/6 mx-auto justify-between text-white mt-12'>
                <p>Copyright @ 2020 Online food</p>
                <div className='flex gap-16'>
                    <p>Privacy Policy</p>
                    <p>Terms fo Use</p>
                    <p>Pricing</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;