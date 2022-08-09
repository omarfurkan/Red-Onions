import React from 'react';

const CheckOut = () => {
    return (
        <div className='w-5/6 mx-auto mt-24'>
            <div className='grid grid-cols-2 gap-24'>
                <div>
                    <h2 className='text-2xl font-bold'>Edit Delivery Detail</h2>
                    <hr className='mt-4 mb-6 h-[1px] bg-black' />
                    <form className='border-0'>
                        <input className='w-full rounded-lg my-2 py-4 px-4 text-lg bg-gray-100 outline-0' type="text" name="address" id="" placeholder='Address' />
                        <br />
                        <input className='w-full rounded-lg my-2 py-4 px-4 text-lg bg-gray-100 outline-0' type="text" name="city" id="" placeholder='City / State' />
                        <br />
                        <input className='w-full rounded-lg my-2 py-4 px-4 text-lg bg-gray-100 outline-0' type="text" name="country" id="" placeholder='Country' />
                        <br />
                        <input className='w-full rounded-lg my-2 py-4 px-4 text-lg bg-gray-100 outline-0' type="text" name="business" id="" placeholder='Business Name' />
                        <br />
                        <textarea className='w-full rounded-lg my-2 py-4 px-4 text-lg bg-gray-100 outline-0' name="message" id="" cols="30" rows="5" placeholder='Add delivery instructor'></textarea>
                        <input className='bg-red-500 w-full rounded-lg my-2 py-4 px-4 text-lg text-white cursor-pointer' type="submit" value="Save & Continue" />
                    </form>
                </div>
                <div>
                    List of food
                </div>
            </div>
        </div>
    );
};

export default CheckOut;