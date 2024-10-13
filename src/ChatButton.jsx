import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import './ChatButton.css';

// WebSocket 서버에 연결
const socket = new WebSocket('ws://localhost:8080/chat');

const ChatButton = () => {
  // 채팅창 열림 여부
  const [isOpen, setIsOpen] = useState(false);
  //입력 메시지
  const [message, setMessage] = useState('');
  // 받은 채팅
  const [chat, setChat] = useState([]);

  // WebSocket 메시지 수신 핸들러
  useEffect(() => {
    socket.onmessage = (event) => {
      //전송할 메시지
      setChat((prevChat) => [...prevChat, event.data]);
    };

    socket.onclose = () => {
      console.log('WebSocket disconnected');
    };

    return () => {
      socket.close();
    };
  }, []);

  // 채팅창 열기/닫기 토글
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // 메시지 전송
  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      // 백단으로 메시지 전송
      socket.send(message);
      // 입력창 초기화
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      {/* 채팅창 열고 닫는 버튼 */}
      <button className="chat-button" onClick={toggleChat}>
        💬
      </button>

      {/* 채팅창 */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-messages">
            {chat.map((msg, index) => (
              <div key={index} className="chat-message">
                {msg}
              </div>
            ))}
          </div>
          <form onSubmit={sendMessage} className="chat-form">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatButton;
