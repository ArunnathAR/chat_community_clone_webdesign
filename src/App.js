import React from "react";
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import HEader from "./HEader";
import styled from "styled-components";
import SideBAR from "./SideBAR";
import Chat from "./Chat";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase";
import Login from "./Login";
import Spinner from "react-spinkit";


function App() {
  const [user,loading]=useAuthState(auth);
  if (loading) {
    return(
      <Appload>
        <Appcont>
          <img src="https://cdn.mod.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"/>
          <Spinner 
          name ="ball-spin-fade-loader"
          color="yellow" fadeIn="none"
          />

      
        </Appcont>
      </Appload>
    )
  }
  return (
    <div className="App">
      <Router>
        {!user ?(
          <Login/>
        ):(
          <>
            <HEader/>
              <APPbody>
                <SideBAR/>
                <Routes>
            
                  <Route path="/" exact />
                    <Chat/>
              
              

            

                </Routes>
             </APPbody>
          </>

        )}

      </Router>
      
    </div>
  );
}

export default App;

const APPbody=styled.div`
  display:flex;
  height:100vh;
  



`;
const Appload=styled.div`
   display:grid;
   place-items:center;
   height:100vh;
   width:100%;

  

`;
const Appcont=styled.div`
  text-align:center;
  padding-bottom:105px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  >img{
    height:100px;
    padding:21px;
    margin-bottom:42px;
    
  }
`;