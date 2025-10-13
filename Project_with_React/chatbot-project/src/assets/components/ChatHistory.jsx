import {useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'
  export function ChatHistory ({chatMessages}) {
    const chatMessageRef = useAutoScroll(chatMessages)
    function useAutoScroll (dependencies) {
      const containerRef = useRef(null);

      useEffect(()=> {
      const containerElement = containerRef.current;
      if(containerElement) {
        containerElement.scrollTop = containerElement.scrollHeight;
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies); 
    return containerRef;
    }



    return (
      <div className = "chat-history-container"
      ref={chatMessageRef}>
            {chatMessages.map((chatMessage)=> {
                return (
                  <ChatMessage 
                    key={chatMessage.id} 
                    message={chatMessage.message}
                    sender={chatMessage.sender}
                  />
            )
    
        })
      }
      </div>
      )
  }

export default ChatHistory;