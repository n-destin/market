import React, { useState, useEffect } from 'react';
import AccountNavigation from './accountNavigation';
import './chatRoom.css'
import SearchIcon from '../../images/search.png'
import archive from '../../images/archives.png'
import filter from '../../images/filter.png'
import drive from '../../images/drive.png'
import folder from  '../../images/folder.png'
import welcome from '../../images/comment.png'
import { getConversations, ROOT_URL } from '../../actions/useractions';
import { useDispatch, useSelector } from 'react-redux';
// import { getChatMessages } from '../../actions/useractions';
import {io} from 'socket.io-client'

const ChatRoom = () => {

  const [messages, setMessages] = useState([{text :'some dummy text here'}, [{}]]);
  const [input, setInput] = useState('');
  const [conversations, setConversations] = useState();
  const [selected, setSelected ] = useState();
  const [inputClass, setinputClass] = useState('input-area')
  const [allClass, setAllClass] = useState('SelectionDisplay');
  const [unreadClass, setUnreadClass] = useState('unSelectDisplay');
  const [selectedDisplay, setSelectedDisplay] = useState('All');
  const [messageClass, setMessageClass] = useState('Buyer')
  const [currentRoom, setCurrentRoom] = useState();



  // connecting to socket.io server
  const socket = io(ROOT_URL)
   
  socket.on('connect', async()=>{
    // update the user about the current messages in the room
    console.log('socket connected');
  })

  const dispatch = useDispatch();

  const handleSelection = (conversationId)=>{
    setMessages(conversations[conversationId][messsageObject]);
    setSelected(conversationId);
    setCurrentRoom(conversationId);
  }

  const MessagePerson = (props)=>{
    return(
      // when clicked set the image to the id of the conversation
        <div className="person" onClick={()=>{handleSelection(props.conversationId)}}> 
            <img src={props.image} alt={`${props.name}-image`} className = 'person-image'/>
            <p>{props.firstaName}</p>
            <p>{props.lastName}</p>
        </div>
    )
  }

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
        // get the conversations from the redux store
        const reducerConverstions = useSelector(store=> {return store.conversations});
        (reducerConverstions) ? setConversations(reducerConverstions): console.log('There are no conversations from the reducer yet');
        return(
            <div>
            {(!conversations)? <div className='peopleContainer'>
                <img src={props.image} alt="another-image"  className='personsImage'/>
                <p className='conversationsText'>No messages yet</p>
            </div> : conversations.map(conversation=>{
                socket.emit('join_room', conversation.id)
                return <MessagePerson firstName = {conversation.person.firstName} lastName = {conversation.person.lastName} conversationId = {conversation.person.conversation} image = {conversation.person.image}/>
            })
            }
        </div> 
        )
    }else{
        if(!selected){
            return(
                <div className='nothingHolderselected'>
                    {setinputClass('displayNoneInputClass')}
                    <img src={props.image} alt="none-selected-image" className='folderImage'/>
                    <p className='welcomingMessage'>Welcome to the messaging center</p>
                </div>
            )
        } else{
            setinputClass('input-area')
            return(
                <div>
                   { messages.map((message) => {
                        (message.sender === localStorage.getItem('userToken'))? setMessageClass("mine"): setMessageClass("yours") // reme,mnber inserting uid on the localStorage
                    return  <Message  className = {messageClass} messageContent = {message.text}/>
                   })
            }
                </div>
            )
        }
}
    
}
  
  // remember fetching the people according to the selected Option

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



  // getting the conversations
  useEffect(()=>{
    const userId  = localStorage.getItem('userToken');
        dispatch(getConversations(userId));
  }, [])

  // end of getting the conversatins


  const handleSendMessage = () => {
    if (input.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        Sender : localStorage.getItem('userToken'),
        text: input.trim(),
        timestamp: new Date().toDateString()
      };
      // is should be the socket.io thing here though 
      socket.emit('new_message', newMessage, currentRoom, (message)=>{
        setMessages([...messages, message]);
        setInput('');
      })
    }
  };

  useEffect(() => {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, [messages]);

  return (
    <div className="chat-room">
    <AccountNavigation navContent = {{"My transactions"  : 'transactions'}}/>
        <div className="chatting_session">
            <div className="messaging-people">
                <div className="message_heading" >
                    <div className="searching">
                         <input type="text" placeholder={'Search chats'}/> 
                         <img src={drive} alt="drive-icon" className='drive-icon'/>
                    </div>
                    <hr />
                    <div className="classifiers">
                        <div className="sectionOne" style={{
                          // display : 'flex',
                          // flexDirection :'row'
                        }}>
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
