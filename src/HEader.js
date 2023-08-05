import React from 'react';
import styled from "styled-components";
import {Avatar} from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase";
function HEader(){
    const [user]=useAuthState(auth);
    return(
        <HEaderContainer>
            {/* The header left components*/}
            
            <Headerleft>
                <HeaderAVatar onClick={()=>auth.singOut()} alt={user?.displayName} src={user?.photoURL} />
                <AccessTimeIcon/>
            </Headerleft>


            {/* the header search components */}
            <Headersearch>
                <SearchIcon/>
                <input type="text" placeholder="Search your thoughts..."/>

            </Headersearch>

            {/* the header right components */}
            <Headerright>
                <HelpOutlineIcon/>


            </Headerright>
            
            

        </HEaderContainer>
    );

}
export default HEader;
const HEaderContainer = styled.div`
    display:flex;
    position:fixed;
    width:100%;
    align-items:center;
    padding:10px 0px;
    background-color:var(--slack-color);
    color:white;
`;
const Headerleft=styled.div`
    flex:0.3;
    display:flex;
    align-items:center;
    margin-left:22px;
    > .MuiSvgIcon--root{
        margin-left:auto;
        margin-right:30px;
    }

`;
const Headersearch = styled.div`
    flex:0.4;
    opacity:1;
    border-radius:#421f44;
    text-align:center;
    display:flex;
    padding:0 80px;
    border:1px gray solid ;

    > input{
        background-color:transparent;
        border:none;
        text-align:center;
        min-width:32vw;
    }




`;
const Headerright=styled.div`
    flex:0.3;
    display:flex;
    align-items:flex-end;
    > .MuiSvgIcon-root{
        margin-left:auto;
        margin-right:20px;
    }


`;
const HeaderAVatar=styled(Avatar)`
    cursor:pointer;
    :hover{
        opacity:0.7;
    }

`