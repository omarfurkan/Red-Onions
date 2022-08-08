import React, { useState } from 'react';
import TestimoanlInfo from '../Menu/TestimonialInfo';
import icon1 from '../../Images/icons/Group 204.png';
import icon2 from '../../Images/icons/Group 245.png';
import icon3 from '../../Images/icons/Group 1133.png';




const Testimonials = () => {

    const [testi, setTesti] = useState(TestimoanlInfo);



    return (
        <div className='w-5/6 mx-auto'>
            <div className='w-3/6'>
                <h2 className='text-xl font-semibold'>Why you Choose Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem itaque voluptatibus aut beatae praesentium neque rerum accusantium omnis quis.</p>
            </div>
            <div className='grid grid-cols-3 gap-12  my-16'>
                {testi.map(tesimonial => {
                    const { id, title, description, image } = tesimonial;
                    return (
                        <div key={id} >
                            <div>
                                <img src={image} alt="" />
                                <div className='flex mt-6 gap-2'>
                                    <div>
                                        <img className='w-56' src={icon1} alt="" />
                                    </div>
                                    <div>
                                        <p className='text-xl font-semibold'>{title}</p>
                                        <p className='mt-4'>{description}</p>
                                        <p className='mt-2 text-red-400'>See More </p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
};

export default Testimonials;