import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import Menu from '../Menu/Menu';
import Slideshow from '../Slider/Slider';
import { BsCart2 } from 'react-icons/bs';



const FoodDetail = () => {
    const { foodId } = useParams();
    const [items, setItems] = useState(Menu);
    const [counter, setCounter] = useState(1);
    const [updatePrice, setUpdatePrice] = useState();



    const item = items.find(i => i.id == foodId);

    const handleSubtrac = () => {
        setCounter(counter - 1)
        setUpdatePrice(counter * item.price)
    }
    const handleAdd = () => {
        setCounter(counter + 1)
        setUpdatePrice(counter * item.price)
    }




    return (
        <div className='w-5/6 mx-auto grid grid-cols-2 gap-20'>
            <div>
                <h2 className='mt-80 text-2xl font-bold mb-8'>{item.name}</h2>
                <p className='w-4/6 leading-loose'>{item.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eum, quos laborum inventore i?</p>
                <div className='flex items-center gap-8'>
                    <p className='text-xl font-bold my-8'>$ {item.price}  {updatePrice}</p>
                    <div className='flex gap-4 px-4 py-1 border-2 rounded-3xl text-lg font-semibold'>
                        <button onClick={handleSubtrac} className='hover:text-red-500'>-</button>
                        <p>{counter}</p>
                        <button onClick={handleAdd} className='hover:text-red-500'>+</button>
                    </div>
                </div>
                <button className='bg-[red] rounded-full  text-white py-2 px-8 flex items-center'> <span className='mr-2'> <BsCart2 /> </span> Add</button>
                <div className='mt-12'>
                    <Slideshow />
                </div>
            </div>
            <div className=''>
                <img src={item?.image} alt="" />

            </div>
        </div>
    );
};

export default FoodDetail;