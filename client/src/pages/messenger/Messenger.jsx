import React,{useEffect,useState} from 'react'
import "./messenger.css"
import Topbar from "../../components/topbar/Topbar"
import Conversations from "../../components/conversations/Conversations"
import Message from "../../components/message/Message"
import axios from "axios";

const Messenger = () => {

    const [conversations,setConversations] = useState([]);
    const user = {
        _id:"6199273c21fb96ec5c17ec11"
    }
    
    useEffect(() => {
        const getConversations = async () =>{
            try{
                const res = await axios.get("/conversations/" + user._id);
                setConversations(res.data);
                // console.log(res)
            }catch(err){
                console.log(err);
            }
        };
        getConversations();
    },[user._id]);

    return (
        <>
        <Topbar />
        <div className="messenger">
           <div className="chatMenu">
               <div className="chatMenuWrapper">
                    <input placeholder="search for friends" className="chatMenuInput" />
                    {conversations.map((c)=>(
                        <Conversations  conversation={c} currentUser={ user }/>
                    ))}
                </div>   
            </div> 
           <div className="chatBox">
               <div className="chatBoxWrapper">
                   <div className="chatBoxTop">
                        <Message />
                        <Message own={true} />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                   </div>
                   <div className="chatBoxBottom">
                        <textarea className="chatMessageInput" placeholder="write something..."></textarea>
                        <button className="chatSubmitButton">Send</button>
                   </div>
               </div>
            </div> 
           <div className="chatOnline">
                <div className="chatOnlineWrapper"></div>
            </div> 
        </div>
        </>
    )
}

export default Messenger
