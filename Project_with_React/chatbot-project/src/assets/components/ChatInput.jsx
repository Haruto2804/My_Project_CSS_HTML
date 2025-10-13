import { useState } from 'react';
import { Chatbot } from 'supersimpledev'
import LoadingSpinnerImage from '../loading-spinner.gif'
import './ChatInput.css';


export function ChatInput ({chatMessage, setChatMessages}) {
        const [inputText,setInputText] = useState ('');
        const [isLoading,setIsLoading] = useState (false);

        function saveInputText (event) {
          setInputText(event.target.value)
        }
        async function sendMessage () {
          setIsLoading(true);
           if (inputText.trim() === '' && isLoading) return;
          const newChatMessages = [
            ...chatMessage,
            {
              message: inputText,
              sender: 'user',
              id: crypto.randomUUID ()
            } 
          ]



          setChatMessages([
            ...newChatMessages,
            // This creates a temporary Loading... message.
            // Because we don't save this message in newChatMessages,
            // it will be remove later, when we add the response.
            {
              message: <img className = "loading-spinner"src= {LoadingSpinnerImage} />,
              sender: 'robot',
              id: crypto.randomUUID()
            }
          ]);
            const response = await Chatbot.getResponseAsync(inputText);
          setChatMessages([
          ...newChatMessages,
          {
            message: response,
            sender: 'robot',
            id: crypto.randomUUID ()
          } 
        ])
        
          setInputText('');
          setIsLoading(false);

        }

        function handleKeyDown (e) {
          if(e.key ===  'Enter') {
            sendMessage();
          }
          else if(e.key === 'Escape') {
           setInputText(''); 
          }
        }
        function handleClear () {
          setChatMessages([]);
          if(localStorage.getItem('message')) {
            localStorage.setItem('message',JSON.stringify[chatMessage])
          }
        }
        return (
          <div className = "chat-input-container">
            <input className = "chat-input"
              placeholder ="Send a message to chatbot" 
              size = "30"
              onChange ={saveInputText}
              value = {inputText}
              onKeyDown = {handleKeyDown}
              disabled = {isLoading}
            />
    
            <button
            onClick = {sendMessage}
            disabled = {isLoading}
            className = "send-button"
            >Send</button>
            <button
            onClick = {handleClear}
            disabled = {isLoading}
            className = "send-button"
            >Clear</button>
         </div>
        );
} 

export default ChatInput