import React,{useState,useEffect} from 'react'
import "./conversation.css"
import axios from "axios"

const Conversations = ({conversation,currentUser}) => {
    
    const [User,setUser] = useState(null)
    

    
    useEffect(()=>{
        const friendId = conversation.members.find((m) => m !== currentUser._id);
        console.log(friendId);
        const getUser = async () => {
            try{
            const res = await axios.get("/users?userId="+friendId);
            setUser(res.data.username);
            }catch(err){
                console.log(err);
            }
        };
        getUser();
    },[currentUser,conversation])
    return (
        <div className="conversation">
            <img className="conversationImg" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" />
            <span className="conversationText">{User}</span>
        </div>
    )
}

export default Conversations
