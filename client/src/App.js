// import React, { Component } from 'react';
import './App.css';
import { VideoCameraOutlined,AudioMutedOutlined,SendOutlined,WechatOutlined } from '@ant-design/icons';
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
        <span><WechatOutlined /></span>
        <h3>Chat Box</h3>
      </div>
      <div className="mainChatWindow">
        <ul className="messagesContainer">
        </ul>
     </div>
     
     <div className="mainMessageContainer">
        <input id="chatMessage" type="text" placeholder="Type message here..."/>
        <span className="buttonSendMessage">
        <SendOutlined >
        <button id="sendMessage"></button>
        </SendOutlined>
        </span>
     </div>
    
    </div>
</div>
  </div>
  );
}

export default App;