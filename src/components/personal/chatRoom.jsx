import React, { useState, useEffect } from 'react';
import AccountNavigation from './accountNavigation';
import './chatRoom.css'
import SearchIcon from '../../images/search.png'
import archive from '../../images/archives.png'
import filter from '../../images/filter.png'
import drive from '../../images/drive.png'
import folder from  '../../images/folder.png'
import welcome from '../../images/comment.png'

const ChatRoom = () => {
  const [messages, setMessages] = useState([{id: 'djfnsdkfn', text : 'this is a dummy text man', timestamp : '123'}]);
  const [input, setInput] = useState('');
  const [people, setPeople] = useState();
  const [selected, setSelected ] = useState();
  const [inputClass, setinputClass] = useState('input-area')
  const [allClass, setAllClass] = useState('SelectionDisplay');
  const [unreadClass, setUnreadClass] = useState('unSelectDisplay');
  const [selectedDisplay, setSelectedDisplay] = useState('All');
  const [messageClass, setMessageClass] = useState('Buyer')

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const Message = (props)=>{
    return(
        <div className={props.className}>
            <p>{props.messageContent}</p>
        </div>
    )
  }

  const Handler = (props)=>{
    if(props.name === 'persons'){
        return(
            <div>
            {(!people)? <div className='peopleContainer'>
                <img src={props.image} alt="another-image"  className='personsImage'/>
                {console.log(props.image)}
                <p>No messages yet</p>
            </div> : <div></div>}
        </div> 
        )
    }else{
        return(
            <div>
        {
            (!selected)? <div className='nothingHolderselected'>
                {setinputClass('displayNoneInputClass')}
                <img src={props.image} alt="none-selected-image" className='folderImage'/>
                <p className='welcomingMessage'>Welcome to the messaging center</p>
            </div> : (messages.map((message) => (
                    <div key={message.id} className="message">
                        {/* making the message sender displayable */}
                        {/* {console.log(localStorage.getItem('userToken'))} */}
                        {setinputClass('input-area')} 
                        { 
                        // get the uid, it is throwing the error because there is no userToken sent to the person. Echange the buyer and seller classNames ... 
                            (message.sender === localStorage.getItem('userToken'))? setMessageClass("Buyer"): setMessageClass("Buyer")
                        }
                        <Message  className = {messageClass} messageContent = {message.text}/>
                    </div>
                    )))
        }
    </div>
        )
    }
    
  }
  
  const MessagePerson = (props)=>{
    return(
        <div className="person" onClick={setSelected(props.id)}>
            <img src={props.image} alt={`${props.name}-image`} className = 'person-image'/>
            <p>{props.name}</p>
        </div>
    )
  }


  const interChangeonAll = ()=>{
    const temp = allClass;
    setAllClass('SelectionDisplay')
    setSelectedDisplay('All')
    setUnreadClass('')
  }

  const interChangeOnUnread = ()=>{
    setUnreadClass('SelectionDisplay')
    setSelectedDisplay('Unread')
    setAllClass('');
  }




  const handleSendMessage = () => {
    if (input.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        Sender : 'Buyer',
        text: input.trim(),
        timestamp: new Date().toDateString()
      };
      setMessages([...messages, newMessage]);
      setInput('');
    }
  };

  useEffect(() => {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, [messages]);

  return (
    <div className="chat-room">
        <AccountNavigation navContent = {{"My transactions"  : 'transactions',
    "My trading dashborad" : "trading_index"}}/>
        <div className="chatting_session">
            <div className="messaging-people">
                <div className="message_heading" >
                    <div className="searching">
                         <input type="text" placeholder={'Search chats'}/> 
                         <img src={drive} alt="drive-icon" className='drive-icon'/>
                    </div>
                    <hr />
                    <div className="classifiers">
                        <div className="sectionOne">
                            <h4 className={allClass} onClick ={interChangeonAll}>All</h4>
                            <h4 className={unreadClass} onClick ={interChangeOnUnread}>Unread</h4>
                        </div>
                        <div className="sectionTwo">
                            <img src={filter} alt="filter-image" />
                            <img src={archive} alt="archived-messages" />
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="persons">
                    {<Handler name = 'persons' image = {folder}/>}
                </div>
            </div>
            <div className="chat-sessions">
                <div id='activeChatPerson' className='activeChatPerson'></div>
                <div id="chat-window" className="chat-window">
                    {<Handler name = 'selected' image = {welcome}/>}
                </div>
                <div className={inputClass}>
                    <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    className='input_text_area'
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
        </div>
        </div>
    </div>
  );
};

export default ChatRoom;
