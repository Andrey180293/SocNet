import React from 'react';

import Profile from "./Profile";
import { connect } from 'react-redux';
import {getProfile,setStatus,updateStatus,getStatus} from "../redux/ProfileReducer";
import { withRouter } from 'react-router';
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import { compose } from 'redux';
import { useEffect } from 'react';






const ProfileConteiner =(props)=> {

  useEffect(()=>{
    let userId=props.match.params.userId;
    if(!userId){
      userId=props.autorizedUserId;
    }
    if(!userId){
      userId=props.history.push("/login");
    }
    props.getProfile(userId)
    props.getStatus(userId)
  },[])
   

    return(
        <Profile {...props} profile={props.profile} setStatus={props.setStatus} updateStatus={props.updateStatus} status={props.status} />
    )  
    } 
    

    let mapStateToProps=(state)=>({
       profile:state.profileState.profile,
       status:state.profileState.status,
       autorizedUserId:state.auth.userId,
       isAuth:state.auth.isAuth
    })
    export default  compose(
      connect(mapStateToProps,{getProfile,setStatus,updateStatus,getStatus}),
      withRouter,
     
    )(ProfileConteiner)
