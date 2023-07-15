import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newsPosts: [],
    lifestylePosts: [],
    gadgetsPosts: [],
    fashionPosts: [],
    comments: []
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
        },
        setComments: ( state, action ) => {
            state.comments = action.payload.comments;
        }
    }
});

export const { setnewsPosts, setlifestylePosts, setgadgetsPosts, setfasionPosts, setComments } = aSlice.actions;
export default aSlice.reducer;