import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Message from './Message';
import Input from './Input';
import AxiosService from "../utils/AxiosService";
import ApiRoutes from "../utils/ApiRoutes";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Chatbox = ({ username }) => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const notify = () => toast.info('🦄 Wow so easy!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await AxiosService.get(
                `${ApiRoutes.GET_MESSAGE.path}`,{authenticate: ApiRoutes.GET_MESSAGE.authenticate})

        //    console.log(response.data.users)
            setMessages(response.data.users);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    const sendMessage = async (text) => {
        try {
            let values = {sender: username ,email:"priya@gmail.com",role:"member",message: text, createdAt: new Date().toISOString(),}
           
            let response = await AxiosService.post(
                `${ApiRoutes.POST_MESSAGE.path}`,
                values,
                {
                  authenticate: ApiRoutes.POST_MESSAGE.authenticate,
                }
              );
              console.log(response)
            // const response = await axios.post('https://messages', {
            //     text,
            //     sender: username,
            //     timestamp: new Date().toISOString(),
            // });
            // setMessages( response.data.newMessage);
            setMessages([...messages, response.data.newMessage]);
            setInputText('');
            window.location.reload()
            notify()
            
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="chatbox w-25 float-end me-5 ">
            {/* <div className="messages" >
                {messages.map((msg, index) => (
                    <Message key={index} msg={msg} />
                ))}
            </div> */}
            <Input sendMessage={sendMessage} inputText={inputText} setInputText={setInputText} />
            <ToastContainer/>

        </div>
        
        
    );
};

export default Chatbox;
