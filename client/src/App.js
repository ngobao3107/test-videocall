// import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { VideoCameraOutlined,AudioMutedOutlined,SendOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(0);

  useEffect(() => {

    async function callBackendAPI (){
      const response = await fetch('/express_backend');
      const res = await response.json();
      setData(res.express)
      if (response.status !== 200) {
        throw Error(res.message) 
      }
      return res;
    };

    callBackendAPI()
  });
  
  return (
    <div className="App">
    {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <h1 className="App-title">Welcome to React</h1> */}
    {/* </header> */}
    {/* <body> */}

  <div className="main">
    <div className="mainLeft">
      <div className="mainVideosTop">
        <span className="userImage">
          <img src="doctor.png" alt="User ava"/>
        </span>
        <div id="userCall">{data}</div>
      </div>
      <div className="mainVideos">
        <div id="videoGrid"> </div>

      </div>
      <div className="mainControls">
        <div className="mainControlsBlock">

          <div onclick="muteUnmute()" className="mainControlsButton mainMuteButton">
            <AudioMutedOutlined />
          </div>

          <div className="mainControlsButtonEndMeeting">
             <span className="endMeeting">
               <img src="phone.png" alt="Hand Up"/>
             </span>
          </div>

          <div onclick="playStop()" className="mainControlsButton mainVideoButton">
            <VideoCameraOutlined />
          </div>
        </div>
      </div>
    </div>
    <div className="mainRight">
      <div className="mainHeader">
        <h6>Chat Box</h6>
      </div>
      <div className="mainChatWindow">
        <ul className="messagesContainer">
        </ul>
     </div>
     {/* <div className="messageSendingTo">To: <span>Everyone <i className="fas fa-angle-down"></i></span> </div> */}
     
     <div className="mainMessageContainer">
        <input id="chatMessage" type="text" placeholder="Type message here..."/>
        <span className="buttonSendMessage">
          <SendOutlined />
        </span>
     </div>
    
    </div>
</div>
{/* </body> */}
  </div>
  );
}

export default App;