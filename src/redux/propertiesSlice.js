import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    verifiedProperties: [],
    unverifiedProperties: []
}

const propertiesSlice = createSlice({
    name: "properties",
    initialState,
    reducers: {
        setVerifiedProperties: (state, action) => {
            state.verifiedProperties = action.payload
        },
        setUnverifiedProperties: (state, action) => {
            state.unverifiedProperties = action.payload
        }
    }
});

export const { setVerifiedProperties, setUnverifiedProperties } = propertiesSlice.actions;
export default propertiesSlice.reducer;