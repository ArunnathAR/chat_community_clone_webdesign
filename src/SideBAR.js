import React from 'react';
import styled from 'styled-components'
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import FileCopyIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import SidebarOption from "./SidebarOption";
import AddIcon from "@material-ui/icons/Add";
import {useCollection} from "react-firebase-hooks/firestore";
import {database} from "./firebase";
import {useAuthState} from 'react-firebase-hooks/auth';
import {collection} from "firebase/firestore";

import {auth} from "./firebase";
function SideBAR(){
    const [channels]=useCollection(collection(database,"rooms"));
    const [user]=useAuthState(auth);
    return(
        <SIdebarcontainer>
            <SIdebarheader>
                <SideINfo>
                    <h3>ARUNNATH</h3>
                    <h4>
                        <FiberManualRecordIcon/>
                        

                    </h4>

                </SideINfo>
                <CreateIcon/>

                
            </SIdebarheader>
            <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions"/>
            <SidebarOption Icon={DraftsIcon} title="Saved items"/>
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel broser"/>
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups"/>
            <SidebarOption Icon={AppsIcon} title="Apps"/>
            <SidebarOption Icon={FileCopyIcon} title="File browser"/>
            <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
            <hr/>
            <SidebarOption Icon={AddIcon} addChannelOption title="Add channel"/>
            {channels?.docs.map(doc =>(
            <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />   

            ))}





        </SIdebarcontainer>
    )
}
export default SideBAR;
const SIdebarcontainer=styled.div`
    color:white;
    background-color:var(--slack-color);
    flex:0.3;
    border-top:1px solid #49274b;
    max-width:305px;
    margin-top:60px;
    >hr{
        margin-top:11px;
        margin-bottom:11px;
        border:1px solid #49274b;
    }


`;
const SIdebarheader=styled.div`
    display:flex;
    border-bottom:1px solid #49274b;
    padding:13px;

    >.MuiSvgIcon-root{
        padding:9px;
        color: #49274b;
        font-size:19px;
        background-color:white;
        border-radius:1000px;



    }


`;
const SideINfo = styled.div`
    flex:1;
    >h3{
        font-size:16px;
        font-weight:900;
        margin-bottom:6px;

    }
    >h4{
        display:flex;
        font-size:14px;
        font-weight:390;
        align-items:center;
    }
    >h3 >.MuiSvgIcon-root{
        font-size:15px;
        margin-top:1px;
        margin-right:3px;
        color:green;
    }

`;