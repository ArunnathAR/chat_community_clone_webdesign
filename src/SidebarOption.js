import React from 'react';
import {useDispatch} from "react-redux";
import styled from "styled-components";
import { database } from './firebase';
import {useCollection} from "react-firebase-hooks/firestore";
import {enterRoom} from "./feature/counter/counterSlice";
function SidebarOption({Icon,title,addChannelOption,id}){
    const dispatch = useDispatch
    const [channels,loading,error]=useCollection(database.collection('rooms'));
    console.log(channels);
    const addChannel=()=>{
        const ChannelName=prompt("Please enter the channel name");
        if (ChannelName){
            database.collection('rooms').add({
                name:ChannelName,
            });
        }

    };
    const selectChannel=()=>{
        if(id){
            dispatch(enterRoom({
                roomId:id
            }))

        }

    };
    return(
        <Sidebaroptcont onClick={addChannelOption ? addChannel: selectChannel}>
            {Icon && <Icon fontsize='small' style={{padding:11}}/>}
            {Icon ?(
                    <h3>
                        {title}

                    </h3>
                ):(
                    <Sidebaroptchannel>
                        <span>#</span>{title}

                    </Sidebaroptchannel>
                )
            }
        </Sidebaroptcont>


    );
}
export default SidebarOption;

const Sidebaroptcont=styled.div`
    display:flex;
    align-items:center;
    padding-left:3px;
    cursor:pointer
    :hover{
        opacity:0.8;
        background-color:#348e46;
    }
    >h3{
        font-weight:500;
    }
    >h3 >span{
        padding:14px;
    }

`;
const Sidebaroptchannel = styled.div`
    padding:10px 0;
    font-weight:270;

`;
