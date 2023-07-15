import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newsPosts: [],
    lifestylePosts: [],
    gadgetsPosts: [],
    fashionPosts: []
};

export const aSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setnewsPosts: ( state, action ) => {
            state.newsPosts = action.payload.newsPosts;
        },
        setlifestylePosts: ( state, action ) => {
            state.lifestylePosts = action.payload.lifestylePosts;
        },
        setgadgetsPosts: ( state, action ) => {
            state.gadgetsPosts = action.payload.gadgetsPosts;
        },
        setfasionPosts: ( state, action ) => {
            state.fashionPosts = action.payload.fashionPosts;
        }
    }
});

export const { setnewsPosts, setlifestylePosts, setgadgetsPosts, setfasionPosts } = aSlice.actions;
export default aSlice.reducer;