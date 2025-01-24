import { IUser } from "@/types/User/APITypes"
import { AppDispatch } from ".."
import { userSlice } from "../Slice/UserSlice"


export const setUserAuth = (dispatch: AppDispatch, user: IUser, tempToken: string) => {
    try {
        dispatch(userSlice.actions.setAuth(true))
        dispatch(userSlice.actions.setTempToken(tempToken))
        dispatch(userSlice.actions.setUsername(user.name))
        dispatch(userSlice.actions.setEmail(user.email))
        dispatch(userSlice.actions.setAvatar(user.avatar))
        dispatch(userSlice.actions.setId(user.id))
    }
    catch (e: any) {
        console.log(e.message)
    }
}

export const setUserLogout = (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.logout())
}