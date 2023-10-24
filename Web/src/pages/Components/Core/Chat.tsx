import React, {Component} from "react";
import ChatWindow from "./ChatWindow.tsx";
import ChatTextBox from "./ChatTextBox.tsx";


class Chat extends Component{
    render(){
        return (<>
            <ChatWindow />
            <ChatTextBox />
        </>)
    }
}

export default Chat
