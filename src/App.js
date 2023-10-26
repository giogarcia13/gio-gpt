import './App.css';
import React, { useState } from 'react';
import gptlogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.png';
import { sendMsgToOpenAI } from './openai';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hello I am Gio-GPT a state-of-the-art language model developed by My Creator Gio. I was designed to understand and generate human-like text based on the input I receive. My purpose is to provide information, answer questions, generate text, and engage in text-based conversations on a wide range of topics. You can ask me about various subjects, seek explanations, get help with writing, or simply have a chat.",
      isBot: true,
    }
]);

  const handleSend = async () => {
    const res = await sendMsgToOpenAI(input);
    setMessages([
      ...messages,
      { text: input, isBot: false},
      { text: res, isBot:true}
    ]);
  }

  return (
    <div className="App">
      <div className='sideBar'>
        <div className='upperSide'>
          <div className='upperSideTop'><img src={gptlogo} alt="Logo" className="logo" /><span className="brand">Gio-GPT</span></div>
          <button className='midBtn'><img src={addBtn} alt="" className="addBtn"/>New Chat</button>
          <div className='upperSideBottom'>
            <button className='query'><img src={msgIcon} alt="Query" /> What is Programming?</button>
            <button className='query'><img src={msgIcon} alt="Query" /> How to use an API??</button>
          </div>
        </div>
        <div className='lowerSide'>
          <div className='listItems'><img src={home} alt='Home' className='listitemsImg' />Home</div>
          <div className='listItems'><img src={saved} alt='Saved' className='listitemsImg' />Saved</div>
          <div className='listItems'><img src={rocket} alt='Upgrade' className='listitemsImg' />Upgrade to Gio-GPT Pro</div>
        </div>
      </div>
      <div className='main'>
        <div className='chats'>
          {messages.map((message, i) => 
              <div key={i} className={message.isBot?'chat bot':"chat"}>
                <img className="chatImg" src={message.isBot?gptImgLogo:userIcon} alt="" /><p className='txt'>{ message.text }</p>
              </div>
          )}
        </div>
        <div className='chatfooter'>
          <div className='inp'>
            <input type='text' placeholder='Send Message To Gio-GPT' value={input} onChange={(e)=>{setInput(e.target.value)}} /><button className="send" onClick={handleSend}><img src={sendBtn} alt="Send"/></button>
          </div>
          <p>Gio-GPT is not completely finished and is prone to errors. Gio-GPT was trained off the creator's 'Gio' real human brain, so there will be errors. Thank you.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
