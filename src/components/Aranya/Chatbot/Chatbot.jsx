import React, { useState } from 'react';
import './Chatbot.css';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm your plant care assistant. Ask me anything about plants, care tips, or help finding the perfect plant for your space!",
      isUser: false
    }
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput('');
      setTimeout(() => {
        const responses = [
          "That's a great question! For that plant, I'd recommend watering once a week and placing it in bright, indirect light.",
          "Based on your description, it sounds like you might have a Monstera! They love humidity and filtered sunlight.",
          "For beginners, I'd suggest starting with a Snake Plant or Pothos - they're very forgiving!",
          "Make sure to check the soil moisture before watering. Most plants prefer to dry out slightly between waterings."
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        setMessages(prev => [...prev, { text: randomResponse, isUser: false }]);
      }, 1000);
    }
  };

  return (
    <div id="chatbot" style={{position:'fixed',bottom:'1.5rem',right:'1.5rem',zIndex:1050}}>
      <div
        id="chatbot-toggle"
        className="chatbot-toggle"
        style={{width:'64px',height:'64px',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}}
        onClick={toggleChat}
      >
        <i className="fas fa-robot text-white fs-3"></i>
      </div>
      <div id="chatbot-window" className={`${isOpen ? '' : 'd-none'} chatbot-window position-absolute bottom-100 end-0 mb-3`} style={{width:'320px',height:'384px'}}>
        <div className="card rounded-4 shadow-lg border-0 h-100 d-flex flex-column">
          <div className="card-heading rounded-top-4 d-flex align-items-center justify-content-between py-3 px-4">
            <div className="d-flex align-items-center gap-2">
              <i className="fas fa-robot text-white fs-5"></i>
              <span className="fw-semibold">Plant Assistant</span>
            </div>
            <button id="close-chat" className="btn btn-link btn-sm text-white p-0" onClick={toggleChat}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div id="chat-messages" className="card-body overflow-auto py-3 px-4 flex-grow-1" style={{maxHeight:'220px'}}>
            {messages.map((msg, index) => (
              <div key={index} className={`mb-3 ${msg.isUser ? 'bg-success bg-opacity-10 ms-4' : 'bg-light me-4'} rounded-3 p-2`}> 
                <p className="small text-dark mb-0">{msg.text}</p>
              </div>
            ))}
          </div>
          <div className="card-footer bg-white border-0 rounded-bottom-4 py-3 px-4">
            <div className="input-group">
              <input
                id="chat-input"
                type="text"
                placeholder="Ask about plants..."
                className="form-control rounded-pill"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && sendMessage()}
              />
              <button
                id="send-message"
                className="send-button rounded-pill ms-2"
                onClick={sendMessage}
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;