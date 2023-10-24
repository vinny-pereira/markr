import React, { Component } from "react";
import defaultLogo from '../../../images/default_avatar.png'

type Props = {
    logo: string,
    groupName: string,
    numberOfMembers: number,
    membersOnline: number
}

class ChatCard extends Component<Props>{
    render(){
        return(<div className="grid grid-rows-3 grid-cols-3 border-2 h-30 w-full mx-1 rounded-lg border-black">
                    <div className="row-span-3 border-r-2 my-1 border-black col-span-1 flex justify-center items-center">
                       <img src={this.props.logo} alt="chat logo" className="h-2/3" /> 
                    </div>
                    <div className="col-span-2 text-2xl ml-1 my-1 font-bold"><h1>{this.props.groupName}</h1></div>
                    <div className="row-span-2 col-span-2 ml-1 my-1">
                        <div className="flex flex-row content-start items-center justify-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                            <div>{this.props.numberOfMembers} members</div>
                        </div>
                        <div className="flex flex-row content-start items-center justify-start gap-2">
                            <div className={`w-2 h-2 rounded-full ${this.props.membersOnline ? "bg-green-700" : "bg-slate-500"}`}></div>
                            <div>{this.props.membersOnline ? this.props.membersOnline : 0} online</div>
                        </div>
                    </div>
                </div>)
    }
}

export default ChatCard;
