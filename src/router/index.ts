import ChatPage from "@/pages/DesktopVers/ChatPage/ChatPage";
import LoginOrRegPage from "@/pages/DesktopVers/LoginOrRegPage/LoginOrReg";
import MainPage from "@/pages/DesktopVers/MainPage/MainPage";
import ChatPageMobile from "@/pages/Mobile/ChatPage/ChatPage";
import MobileMainPage from "@/pages/Mobile/MainPage/MainPage";
import ProfilePage from "@/pages/Mobile/ProfilePage/ProfilePage";


export const desctopPrivateRoutes = [
    {
        path: '/',
        component: MainPage,
    },

    {
        path: '/chat/:name',
        component: ChatPage,
    },
]

export const desctopPublicRoutes = [
    {
        path: '/login',
        component: LoginOrRegPage,
    }
]

export const mobilePrivateRoutes = [
    {
        path: '/',
        component: MobileMainPage,
    },
    {
        path: '/chat/:name',
        component: ChatPageMobile,
    },
    {
        path: '/profile',
        component: ProfilePage,
    }
]

export const mobilePublicRoutes = [
    {
        path: '/login',
        component: LoginOrRegPage,
    }
]