import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Menu from '../../Menu/Menu';
import './Gallery.css';


const Gallery = () => {
    const [items, setItems] = useState(Menu);



    const navigate = useNavigate()

    const fillterItem = categoryItem => {
        const updatateItems = Menu.filter(currentElement => {
            return currentElement.category === categoryItem;

        })
        setItems(updatateItems)
    }

    const handleFoodDetail = (id) => {
        navigate(`/food/${id}`)
    }


    return (
        <div className='w-5/6 mx-auto my-16'>
            <div className='w-2/6 mx-auto mb-12'>
                <div className='flex justify-around'>
                    <button onClick={() => fillterItem("breakfast")}>Breakfast</button>
                    <button onClick={() => fillterItem("lunch")}>Lunch</button>
                    <button onClick={() => fillterItem("dinner")}>Dinner</button>
                </div>
            </div>
            {/* main item section */}
            <div className='grid grid-cols-3  gap-16'>

                {
                    items.map(element => {
                        const { id, name, image, price, description } = element;
                        return (
                            <div
                                key={id}
                                className='cardFood text-center h-96 cursor-pointer'
                                onClick={() => handleFoodDetail(id)}
                            >
                                <div className=' w-full mx-auto'>
                                    <img className=' w-48 mx-auto pt-8' src={image} alt={name} />
                                </div>
                                <div>
                                    <p className='text-lg font-semibold'>{name}</p>
                                    <p>{description}</p>
                                    <p className='text-4xl font-bold mt-6'>$ {price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='my-16 text-center'>
                <button onClick={() => navigate('/checkout')} className=' py-2 px-4 bg-red-500 text-white'>Checkout Your Food</button>
            </div>
        </div>
    );
};

export default Gallery;