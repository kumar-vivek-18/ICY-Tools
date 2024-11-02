import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div className='w-full h-screen bg-red-200 mt-[80px] flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center text-center gap-2'>
                <button onClick={() => { navigate('unverified-properties') }} className='w-[300px] text-[1.5rem] font-semibold border-2 bg-black text-white py-4 rounded-xl flex flex-row justify-center items-center gap-2'>
                    <p>Unverified Propeties</p>
                    <FaArrowRight color='white' />
                </button>
                <button onClick={() => { navigate('verified-properties') }} className='w-[300px] text-[1.5rem] font-semibold border-2 bg-black text-white py-4 rounded-xl flex flex-row justify-center items-center gap-2'>
                    <p>Verified Propeties</p>
                    <FaArrowRight color='white' />
                </button>
            </div>
        </div>
    );
}

export default Home;
