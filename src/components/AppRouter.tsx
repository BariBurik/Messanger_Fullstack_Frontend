import { Route, Routes } from "react-router-dom";
import Loader from "./UI/Loader/Loader";
import { desctopPrivateRoutes, desctopPublicRoutes, mobilePrivateRoutes, mobilePublicRoutes } from "@/router";
import { useSelector } from "react-redux";
import { RootState } from '@/store';

interface AppRouterProps {
    isLoading: boolean
}

function AppRouter({isLoading}: AppRouterProps) {
    const isAuth = useSelector((state: RootState) => state.user.isAuth)

    const userAgent = navigator.userAgent || ''; 
    const isMobile = /android|ios|iphone|ipad|ipod/i.test(userAgent.toLowerCase());

    if (isLoading) {
        return <Loader/>
    }

    if (isMobile) {
        return (
            isAuth
            ?
            <Routes>
                {mobilePrivateRoutes.map(route => 
                    <Route key={route.path} path={route.path} Component={route.component}/>
                )}
                <Route path="*" Component={mobilePrivateRoutes[0].component}/>
            </Routes>
            :
            <Routes>
                {mobilePublicRoutes.map(route => 
                    <Route key={route.path} path={route.path} Component={route.component}/>
                )}
                <Route path="*" Component={mobilePublicRoutes[0].component}/>
            </Routes>
        )
    }

    return ( 
        isAuth
        ?
        <Routes>
            {desctopPrivateRoutes.map(route => 
                <Route key={route.path} path={route.path} Component={route.component}/>
            )}
            <Route path="*" Component={desctopPrivateRoutes[0].component}/>
        </Routes>
        :
        <Routes>
            {desctopPublicRoutes.map(route => 
                <Route key={route.path} path={route.path} Component={route.component}/>
            )}
            <Route path="*" Component={desctopPublicRoutes[0].component}/>
        </Routes>
    );
}

export default AppRouter;