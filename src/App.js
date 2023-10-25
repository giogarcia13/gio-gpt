import React from 'react';
import './App.css';
import gptlogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.png';

function App() {
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
          <div className='chat'>
            <img className="chatImg" src={userIcon} alt="" /><p className='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa enim nec dui nunc mattis enim ut. Viverra justo nec ultrices dui sapien eget mi. In aliquam sem fringilla ut morbi tincidunt augue interdum. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Ut diam quam nulla porttitor massa id neque. Pharetra pharetra massa massa ultricies mi quis. Dolor magna eget est lorem ipsum dolor. Diam sollicitudin tempor id eu nisl nunc mi. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Lobortis feugiat vivamus at augue. Imperdiet dui accumsan sit amet nulla facilisi morbi. Tellus molestie nunc non blandit. Convallis tellus id interdum velit laoreet id donec. Aliquet lectus proin nibh nisl. Ultricies tristique nulla aliquet enim tortor at auctor. Mi ipsum faucibus vitae aliquet nec. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Venenatis urna cursus eget nunc scelerisque viverra mauris in..</p>
          </div>
          <div className='chat'>
            <img className="chatImg" src={gptImgLogo} alt="" /><p className='txt'>Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Purus semper eget duis at tellus at urna condimentum mattis. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Integer eget aliquet nibh praesent tristique magna sit amet. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Tempus egestas sed sed risus pretium quam. Vitae semper quis lectus nulla at volutpat diam ut. At consectetur lorem donec massa sapien faucibus et molestie ac.</p>
          </div>
        </div>
        <div className='chatfooter'>
          <div className='inp'>
            <input type='text' placeholder='Send Message To Gio-GPT' /><button className="send"><img src={sendBtn} alt="Send"/></button>
          </div>
          <p>Gio-GPT is not completely finished and is prone to errors. Gio-GPT is trained on a real human brain, so there will be errors.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
