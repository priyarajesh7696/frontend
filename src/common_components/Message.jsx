import React from 'react';

const Message = ({ msg }) => (
    <div className={`message ${msg.sender === '' ? 'user-message' : 'bot-message'}`} >
        <div className='float-start'> <p >{msg.sender}</p></div>
       <div className='float-end'><span className="timestamp">{new Date(msg.createdAt).toLocaleTimeString()}</span></div> 
       <div className='mt-5'><p>{msg.message}</p></div>
       
    </div>
);

export default Message;
