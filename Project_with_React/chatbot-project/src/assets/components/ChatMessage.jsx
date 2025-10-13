import RobotProfileImage from '../robot.png'
import UserProfileImage from '../haruto.jpg'
import dayjs from 'dayjs'
import './ChatMessages.css'
  export function ChatMessage ({message,sender}) {
    const time = dayjs().valueOf();

        return (
          <div className = {sender === 
          'user' ? 'chat-message-user' : 
          'chat-message-robot'}>
            {sender === 'robot' && (
              <img src = {RobotProfileImage}/>)}
            <div className = "chat-message-text">
                {message}
                <p className = 'sent-time'> {dayjs(time).format('HH:mm')}</p>
            </div>
            
            
            {sender === 'user' && (
              <img className = "chat-message-haruto-picture"src = {UserProfileImage} />)}

          </div>
        )
      }

export default ChatMessage;