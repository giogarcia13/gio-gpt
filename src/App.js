import './App.css';
import gptlogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg'

function App() {
  return (
    <div className="App">
      <div className='sideBar'>
        <div className='upperSide'>
          <div className='upperSideTop'><img src={gptlogo} alt="Logo" className="logo" /><span className="brand">Gio-GPT</span></div>
          <button className='midBtn'><img src={addBtn} alt="" className="addBtn"/>New Chat</button>
          <div className='uppereSideBottom'>
            <button className='query'><img src={msgIcon} alt="Query" /> What is Programming?</button>
            <button className='query'><img src={msgIcon} alt="Query" /> How to use an API??</button>
          </div>
        </div>
        <div className='lowerSide'>
          <div className='listItems'><img src= {home} alt='Home' className='listitemsImg' />Home</div>
          <div className='listItems'><img src= {saved} alt='Saved' className='listitemsImg' />Saved</div>
          <div className='listItems'><img src= {rocket} alt='Upgrade' className='listitemsImg' />Upgrade to GioGPT Pro</div>
        </div>
      </div>
      <div className='main'>
        <div className='chats'>
          <div classname='chat'>
            <img src={userIcon} alt="" /><p className='txt'>This is a placeholder remember to change this This is a placeholder remember to change this This is a placeholder remember to change this</p>
          </div>
          <div classname='chat'>
            <img src={gptImgLogo} alt="" /><p className='txt'>This is a placeholder remember to change this This is a placeholder remember to change this This is a placeholder remember to change this</p>
          </div>
        </div>
        <div className='chatfooter'>
          <div className='inp'>
            <input type='text' placeholder='Send Message To Gio-GPT' /><button className="send"><img src={sendBtn} alt="Send"/></button>
          </div>
          <p>Gio-GPT is not completely Finished is a prone to errors. Gio-GPT is train of a real human brain so there will be errors</p>
      </div>
    </div>
  </div>
  );
}

export default App;
