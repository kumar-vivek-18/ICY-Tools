import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useFetchVerifiedProperties } from '../hooks/useFetchVerifiedProperties';
import PropertiesItem from './PropertiesItem';

const VerifiedProperties = () => {
    const [loading, setLoading] = useState(true);
    const properties = useSelector(store => store.properties.verifiedProperties);

    console.log("properties", properties);
    useFetchVerifiedProperties(loading, setLoading);

    return (
        <div className='max-w-[1400px] mt-[80px]'>
            {properties && properties?.length > 0 && properties.map((property) => {
                return (
                    <PropertiesItem
                        key={property._id}
                        property={property}
                    />
                )
            })}
        </div>
    )
}

export default VerifiedProperties
