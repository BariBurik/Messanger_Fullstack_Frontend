import { useUserReLoginQuery } from "@/store";
import AppRouter from "../AppRouter";
import { useEffect, useRef } from "react";
import { useAppDispatch } from "@/hooks/redux";
import { setUserAuth } from "@/store/ActionCreators/User";
import { checkAndSetCSRFToken } from "@/services/checkAndSetCookie";

export const App = () => {

    const dispatch = useAppDispatch()
    const initialLoad = useRef(true)
    const {data: userData, isLoading: isLoadingUser} = useUserReLoginQuery()
    

    useEffect(() => {
        if (userData && initialLoad.current) {
            let user = userData.userReLogin.user
            user = {...user, avatar: `http://95.163.230.130:8000/media/${user.avatar}`}
            setUserAuth(dispatch, user, userData.userReLogin.tempToken)
            initialLoad.current = false;
        }
    }, [userData])

    useEffect(() => {
        checkAndSetCSRFToken();
    }, [])

    return ( 
        <AppRouter isLoading={isLoadingUser}/>
    );
}

export default App;