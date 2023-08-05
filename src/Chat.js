import React,{useEffect,useRef} from 'react';
import styled from 'styled-components';
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import {useSelector} from "react-redux";
import { selectRoomId } from './feature/counter/counterSlice';
import {useCollection,useDocument} from "react-firebase-hooks/firestore"; 
import {database} from "./firebase";
import Message from "./Message";
import Chatinput from "./Chatinput";

function Chat(){
    const chatrEf =useRef(null);
    const roomId=useSelector() ;
    const [roomDetails] = useDocument(
       roomId && database.collection('rooms').doc(roomId)
    );
    const [roomMessage,loading] = useCollection(
        roomId &&
        database.collection("rooms") .doc(roomId) .collection("messages").orderBy("timestamp","asc")

    );
    useEffect(()=>{
        chatrEf?.current?.scrollIntoView({behavior:"smooth",});

    },[roomId,loading]);
    return(
        <Chatcont>
            {roomDetails && roomMessage &&(
                <>
                    <Head>
                        <Headleft>
                            <h4><strong>#{roomDetails?.data().name}</strong></h4>
                            <StarBorderOutlinedIcon/>

                        </Headleft>
                        <Headright>
                            <p>
                                <InfoOutlinedIcon/>Brief
                            </p>

                        </Headright>

                    </Head>
                    <Chatmessage>
                        {roomMessage?.docs.map(doc=>{
                            const{message,timestamp,user,userImage}=doc.data();
                            return (
                                <Message
                                key ={doc.id}
                                message={message}
                                timestamp={timestamp}
                                user={user}
                                userImage={userImage}
                                />
                            );
                        })}
                    <Chatbottom ref={chatrEf}/>

                    </Chatmessage>
                    <Chatinput
                        chatRef={chatrEf}
                        channelName={roomDetails?.data().name}
                        channelId={roomId}
                    />
                </>

            )}
            

        </Chatcont>
    )
};
export default Chat;
const Chatbottom=styled.div`
    padding-bottom:210px;
`;
const Chatmessage=styled.div`

`;
const Head= styled.div`
    display:flex;
    justify-content:space-between;
    padding:22px;
    border-bottom:1.5px solid lightgray;


`;
const Headleft= styled.div`
    display:flex;
    align-items:center;
    >h4{
        display:flex;
        text-transform:lowercase;
        margin-right:10px;

    }
    >h4 > .MuiSvgIcon-root{
    margin-left:11px;
    font-size:16px;
    }    

`;
const Headright =styled.div`
  >p{
    display:flex;
    align-items:center;
    font-size:15px;
    }
  >p >.MuiSvgIcon-root{
    margin-right:6px !important;
    font-size:17px;

  }
`;
const Chatcont=styled.div`
    flex:0.7%;
    flex-grow:1;
    overflow-y:scroll;
    margin-top:63px;
`;
