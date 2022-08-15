import React from 'react';
import { ChatEngine } from 'react-chat-engine';

//import ChatFeed from './components/ChatFeed';
//import LoginForm from './components/LoginForm';
import './App.css';

const App =()=>{

    return(

        <ChatEngine
			height='100vh'
			userName='tunirmaa'
			userSecret='567890'
			projectID='c0be0887-6d58-4c84-a028-61d999b31913'
		/>

    );

}

//const projectID = '693a6d1c-bd4f-472c-b633-92fea7b89c3c';
//
//const App = () => {
//if (!localStorage.getItem('username')) return <LoginForm />;
//
//  return (
//
//
//    <ChatEngine
//      height="100vh"
//      projectID={projectID}
//      userName={localStorage.getItem('username')}
//      userSecret={localStorage.getItem('password')}
//      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
//      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
//    />
//  );
//};
//
//// infinite scroll, logout, more customizations...

export default App;