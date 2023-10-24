import React, { Component } from "react";
import ChatCard from "./ChatCard.tsx";
import styles from "./ChatBar.module.scss";
import logo from "../../../images/default_avatar.png";
class ChatBar extends Component {
    render(){
        return(
                <div className={`${styles.chatBar} flex flex-wrap justify-start items-start content-start gap-4 overflow-scroll`}>
                    <ChatCard logo={logo} groupName="Test Group" numberOfMembers="3"/>
                    <ChatCard logo={logo} groupName="Test Group 2" numberOfMembers="2"/>
                </div>
              )
    }
}

export default ChatBar;
