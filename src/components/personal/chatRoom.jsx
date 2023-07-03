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
import { getChatMessages } from '../../actions/useractions';
import {io} from 'socket.io-client'

const ChatRoom = () => {
  const [messages, setMessages] = useState();
  const [input, setInput] = useState('');
  const [converstations, setConversations] = useState();
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
    setSelected(conversationId);
    setCurrentRoom(conversationId);
    // set the current room to the clicked channel thing
    useEffect(()=>{
        dispatch(getChatMessages(conversationId));
    }, []);
  }

  const MessagePerson = (props)=>{
    return(
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
            {(!converstations)? <div className='peopleContainer'>
                <img src={props.image} alt="another-image"  className='personsImage'/>
                {console.log(props.image)}
                <p>No messages yet</p>
            </div> : converstations.map(conversation=>{
                // joing socket rooms 
                socket.emit('join_room', conversation.id)
                const image = conversation.person.image;
                const firstName = conversation.person.firstName;
                const lastName = conversation.person.lastName;
                const conversationId = conversation.person.conversation;
                return <MessagePerson firstName = {firstName} lastName = {lastName} conversationId = {conversationId} image = {image}/>
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
            // get the messages from the reducer 
            const messagesFromReducer = useSelector(store=>{return store.messages})
            setMessages(messagesFromReducer)
            return(
                <div>
                   { messages.map((message) => {
                    // some of the unclear code here
                        setinputClass('input-area')
                        (message.sender === localStorage.getItem('userToken'))? setMessageClass("Buyer"): setMessageClass("Buyer")
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
    const userId  = localStorage.getItem('userToken').uid;
        dispatch(getConversations(userId));
  }, [])

  // end of getting the conversatins


  const handleSendMessage = () => {
    if (input.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        Sender : localStorage.getItem('userToken').uid,
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
