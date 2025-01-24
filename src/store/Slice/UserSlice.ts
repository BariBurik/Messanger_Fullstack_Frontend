import { userSliceType } from "@/types/User/SliceTypes"
import { createSlice } from "@reduxjs/toolkit"

const initialState: userSliceType = {
    isAuth: false,
    isLoading: false,
    tempToken: '',
    username: '',
    email: '',
    avatar: '',
    id: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuth(state, action) {
            state.isAuth = action.payload
        },
        setLoading(state, action) {
            state.isAuth = action.payload
        },
        setTempToken(state, action) {
            state.tempToken = action.payload
        },
        setUsername(state, action) {
            state.username = action.payload
        },
        setEmail(state, action) {
            state.email = action.payload
        },
        setAvatar(state, action) {
            state.avatar = action.payload
        },
        setId(state, action) {
            state.id = action.payload
        },
        logout(state) {
            state.isAuth = false
            state.tempToken = '',
            state.username = '',
            state.email = '',
            state.avatar = '',
            state.id = 0
        }
    }
})

export const { setAuth, setTempToken,setUsername, setEmail, setAvatar, logout } = userSlice.actions;

export default userSlice.reducer