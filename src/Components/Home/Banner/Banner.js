import React from 'react';
import './Banner.css'
import banner from '../../../Images/bannerbackground.png'
import SearchBar from './SearchBar';

const Banner = () => {
    return (
        <div className=''>
            <div style={{ background: `url(${banner})`, backgroundSize: 'cover' }} className='h-[500px] relative'>
                <h1 className='absolute top-[40%] left-[40%] text-4xl font-black'>Best Food Waiting For Your Belly</h1>
                <div className='absolute top-[55%] left-[50%]'>
                    <SearchBar />
                </div>
            </div>
        </div>
    );
};

export default Banner;