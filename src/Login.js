import React from 'react';
import styled from "styled-components";
import {Button} from "@material-ui/core";
import {auth,provider} from "./firebase";
import {signInWithPopup} from "firebase/auth";
function Login(){
    const sigNIn = (e) =>{
        e.preventDefault();
        signInWithPopup(auth,provider).catch((error)=>
        alert(error.message));
    };
    return (
        <Logincont>
            <Loginincont>
                <img src=""  alt="USer image"/>
                <h1>Sign in to the joo</h1>
                <p1>joo.slack.com</p1>
                <Button  onClick={sigNIn}>
                    Sign-in with google account
                </Button>

            </Loginincont>

        </Logincont>

    )
}
export default Login;
const Logincont= styled.div`
    background-color:#f8f8f8;
    height:100vh;
    display:grid;
    place-items:center;

`; 

const Loginincont = styled.div`
    padding:100px;
    text-align:center;
    background-color:white-space;
    border-radius:11px;
    box-shadow:0 1px 4px rgba(0,0,0,0.13),0 1px 3px rgba(0,0,0,0.27);
    >img{
        object-fit:contain;
        height:110px;
        margin-bottom:39px;

    }
    >button{
        margin-top:52px;
        text-transform:inherit !important;
        background-color:#0a8d48 !important;
        color:blue;
    }
`;