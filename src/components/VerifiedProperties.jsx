import React, { useState } from 'react'
import { useFetchVerifiedProperties } from '../hooks/useFetchVerifiedProperties';

const VerifiedProperties = () => {
    const [loading, setLoading] = useState(true);
    console.log(loading);
    useFetchVerifiedProperties(loading, setLoading);
    console.log(loading);
    return (
        <div className='max-w-[1400px] mt-[80px]'>
            <button onClick={() => { setLoading(true); }}>
                Hii there
            </button>
        </div>
    )
}

export default VerifiedProperties
