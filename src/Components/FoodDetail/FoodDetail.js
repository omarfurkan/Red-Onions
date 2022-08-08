import React, { useState } from 'react';
import { useParams, useLocation } from "react-router-dom";
import Menu from '../Menu/Menu';
import Slideshow from '../Slider/Slider';



const FoodDetail = () => {
    const { foodId } = useParams();
    const { pathname } = useLocation()


    console.log(pathname)

    const [items, setItems] = useState(Menu);
    console.log(items, foodId)
    const item = items.find(i => i.id == foodId);
    console.log(item)


    return (
        <div className='w-5/6 mx-auto grid grid-cols-2 gap-20'>
            <div>
                <h2 className='mt-80 text-2xl font-bold mb-8'>{item.name}</h2>
                <p className='w-4/6 leading-loose'>{item.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eum, quos laborum inventore i?</p>
                <p className='text-xl font-bold my-8'>$ {item.price}</p>
                <button className='bg-[red] rounded-lg  text-white py-2 px-8'>Add</button>
                <div className='mt-12'>
                    <Slideshow />
                </div>
            </div>
            <div className=''>
                <img src="" alt="" />

            </div>
        </div>
    );
};

export default FoodDetail;