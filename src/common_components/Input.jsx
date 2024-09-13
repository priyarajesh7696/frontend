import React from 'react';
import { toast } from 'react-toastify';

const Input = ({ sendMessage, inputText, setInputText }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.trim() !== '') {
            sendMessage(inputText);
            
        }
    };

    return (
        <form className="input-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Type your message..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default Input;
