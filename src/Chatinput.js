import React,{useState} from 'react';
import styled from "styled-components";
import {Button} from "@material-ui/core";
import {database} from "./firebase";
import firebase from "firebase/compat/app";
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from "./firebase";
function Chatinput({channelName,channelId,chatrEf}){
    const [Input,setInput]=useState("");
    const [user]=useAuthState(auth);


    const sendMessage=e=>{
        e.preventDefault();//prevents refresh
        if (!channelId){
            return false;


        }
        database.collection('rooms').doc(channelId).collection('messages').add({
            message:Input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            user:user.displayName,

            userImage:user.photoURL

        });
        chatrEf.current.scrollIntoview({
            behavior:"smooth",
        });
        setInput("");
    }
    return(
        <Chatinputcont>
            <form>
                <input value={Input} onChange={e=>setInput(e.target.value)}placeholder={`message #${channelName} `}>
                </input>
                <Button hidden type="submit" onClick={sendMessage}>
                    Send
                </Button>
            </form>

        </Chatinputcont>
    );
};
export default Chatinput;
const Chatinputcont = styled.div`
    border-radius:22px;
    >form{
        position:relative;
        display:flex;
        justify-content:center;
    }
    >form >input{
        position:fixed;
        bottom:33px;
        width:63%;
        border:1px solid green;
        border-radius:4px;
        padding:22px;
        outline:none;


    }
    >form >button{
        display:none !important;

    }


`;