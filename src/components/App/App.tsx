import { useEffect, useState } from "react";
import Template from "../UI/Template/Template";
import Message from "../Message/Message";
import MessageWindow from "../MessagesWindow/MessageWindow";
import Chat from "../Chat/Chat";
import LoginOrRegPage from "@/pages/DesktopVers/LoginOrRegPage/LoginOrReg";
import ProfileModal from "../ProfileModal/ProfileModal";
import ProfilePage from "@/pages/Mobile/ProfilePage/ProfilePage";
import ChatPage from "@/pages/Mobile/ChatPage/ChatPage";
import MainPage from "@/pages/Mobile/MainPage/MainPage";

 
export const App = () => {
    return ( 
        <div>
            <MainPage/>
        </div>
    );
}

export default App;