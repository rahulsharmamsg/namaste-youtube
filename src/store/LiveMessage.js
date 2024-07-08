import { createSlice } from "@reduxjs/toolkit";

const LiveMessage = createSlice({
    name: "livemsg",
    initialState: {
        message: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.message.splice(40,1)
            state.message.push(action.payload)
            
        }
    }
})
export const {addMessage} = LiveMessage.actions
export default LiveMessage.reducer;