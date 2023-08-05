import React from "react";
import styled from "styled-components";
function Message({message,timestamp,user,userImage}){
    return (
        <Messag>
            <img src={userImage}alt=""/>
            <Messageinfo>
                <h4>
                    {user}{''}
                    <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>

            </Messageinfo>

        </Messag>
    )
}
export default Message;
const Messag=styled.div`
    display:flex;
    align-items:center;
    padding:21px;
    >img{
        height:52px;
        border-radius:9px;
    }

`;

const Messageinfo = styled.div`
    padding-left:11px;
    >h4 >span{
        color:blue;
        font-weight:310;
        margin-left:6px;
        font-size:11px;
    }
`;
