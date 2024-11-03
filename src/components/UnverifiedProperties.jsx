import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useFetchUnverifiedProperties } from '../hooks/useFetchUnverifiedProperties';
import PropertiesItem from './PropertiesItem';

const UnverifiedProperties = () => {
    const [loading, setLoading] = useState(true);
    const properties = useSelector(store => store.properties.unverifiedProperties);
    // console.log("1", loading);
    useFetchUnverifiedProperties(loading, setLoading);
    // console.log("2", loading);
    // setTimeout(console.log('load', loading), 2000);
    return (
        <div className='max-w-[1400px] mt-[80px]'>
            <div className='flex flex-row flex-wrap justify-evenly'>
                {properties && properties?.length > 0 && properties.map((property) => {
                    return (
                        <PropertiesItem
                            property={property}
                        />
                    )
                })}
            </div>

        </div>
    )
}

export default UnverifiedProperties;
