import React from 'react';
import { login } from "../redux/authReducer";
import {connect} from 'react-redux';
import Login from './Login';



// class LoginContainer extends React.Component {
// //     componentDidMount() {
// // this.props.login()
// //     }


//     render() { 
//         return <Login {...this.props}  login={this.login}/>
//     }
// }
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

})
export default connect(mapStateToProps, { login })(Login);
