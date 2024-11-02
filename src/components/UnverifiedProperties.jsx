import React, { useState } from 'react'
import { useFetchUnverifiedProperties } from '../hooks/useFetchUnverifiedProperties';

const UnverifiedProperties = () => {
    const [loading, setLoading] = useState(true);
    console.log("1", loading);
    useFetchUnverifiedProperties(loading, setLoading);
    console.log("2", loading);
    setTimeout(console.log('load', loading), 2000);
    return (
        <div className='max-w-[1400px] mt-[80px]'>
            <button onClick={() => { }}>
                Hii there
            </button>
        </div>
    )
}

export default UnverifiedProperties;
