import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut, getAuthUserData } from "../redux/authReducer";
import { Button } from 'antd';
const LoginLink = (props) => {
    return (

        <>
            {props.isAuth ? <> {props.login} <Button type="primary" danger onClick={props.logOut} >log_Out</Button> </>

                : <NavLink to={'/login'}>Login</NavLink>}
            {  console.log(props.isAuth)}
        </>



    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

})

export default connect(mapStateToProps, { getAuthUserData, logOut })(LoginLink);



