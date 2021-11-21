import React from 'react'
import "./message.css"
function Message({own}) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img className="messageImg" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="img" />
                <p className="messageText">Hello message</p>
            </div>
        </div>
    )
}

export default Message
