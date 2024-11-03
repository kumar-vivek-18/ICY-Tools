import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { setUnverifiedProperties, setVerifiedProperties } from "../redux/propertiesSlice";


export const useFetchVerifiedProperties = async (loading, setLoading) => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('fetching unverified properties');
        const fetchProperties = async () => {
            try {
                await axios.get('http://localhost:5000/v1/property/all-properties', {
                    params: {
                        type: "verified"
                    }
                })
                    .then((res) => {
                        if (res.status === 200) {
                            console.log('verified properties', res.data);
                            dispatch(setVerifiedProperties(res.data));
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