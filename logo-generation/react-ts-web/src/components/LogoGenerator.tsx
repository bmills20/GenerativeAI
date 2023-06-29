import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

type ChatMessage = {
  sender: "user" | "bot";
  content: string | JSX.Element;
};

const LogoGeneratorChat: React.FC = () => {
  const [inputData, setInputData] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { sender: "bot", content: "Hello! What logo would you like to generate?" }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const generateLogo = async () => {
    try {
      const response = await axios.post('http://localhost:5000/generate_logo', { inputData });
      const newMessage: ChatMessage = {
        sender: "bot",
        content: <img src={response.data.logo} alt="Generated logo" />
      };
      setChatHistory(prev => [...prev, newMessage]);
    } catch (error) {
      console.error("An error occurred while generating the logo:", error);
    }
  };

  const handleSend = () => {
    if (inputData) {
      setChatHistory(prev => [...prev, { sender: "user", content: inputData }]);
      setInputData("");
      generateLogo();
    }
  };

  return (
    <div>
      <div>
        {chatHistory.map((msg, index) => (
          <div key={index} className={msg.sender}>
            {typeof msg.content === "string" ? <p>{msg.content}</p> : msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        ref={inputRef}
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        onKeyUp={(e) => e.key === "Enter" && handleSend()}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default LogoGeneratorChat;
