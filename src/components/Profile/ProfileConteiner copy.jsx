import React from 'react';

import Profile from "./Profile";
import { connect } from 'react-redux';
import {getProfile,setStatus,updateStatus,getStatus} from "../redux/ProfileReducer";
import { withRouter } from 'react-router';
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import { compose } from 'redux';






class ProfileConteiner extends React.Component {

    componentDidMount() {
    let userId=this.props.match.params.userId;
    if(!userId){
      userId=this.props.autorizedUserId;
    }
    if(!userId){
      userId=this.props.history.push("/login");
    }
    this.props.getProfile(userId)
    this.props.getStatus(userId)
      } 

      render() {

    return(
        <Profile {...this.props} profile={this.props.profile} setStatus={this.props.setStatus} updateStatus={this.props.updateStatus} status={this.props.status} />
    )  
    } 
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
