import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { setUnverifiedProperties } from "../redux/propertiesSlice";


export const useFetchUnverifiedProperties = async (loading, setLoading) => {
    const dispatch = useDispatch();
    console.log('padd', loading);
    useEffect(() => {
        console.log('fetching unverified properties');
        const fetchProperties = async () => {
            try {
                await axios.get('http://localhost:5000/v1/property/all-properties', {
                    params: {
                        type: "unverified"
                    }
                })
                    .then((res) => {
                        if (res.status === 200) {
                            console.log('unverified properties', res.data);
                            dispatch(setUnverifiedProperties(res.data));
                        }
                    })
            } catch (error) {
                console.error("Error occured while fetching unverified properties", error.message);
            }
            finally {
                setLoading(false);
            }
        }

        fetchProperties();


    }, []);



    return null;
}