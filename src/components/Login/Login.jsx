import React from 'react';
import { Form, Field } from 'react-final-form';
import { Redirect } from 'react-router';
import { Input } from '../common/FormsControls/FormsControl';
import { required,  composeValidators } from '../utils/validators'
import { login } from "../redux/authReducer";
import {connect} from 'react-redux';
import x from '../common/FormsControls/FormsControl.module.css';



const Loginform=(props)=>{
    return (
        <Form  onSubmit={props.onSubmit}
        validate={()=>{}}
        render={({ handleSubmit }) => {
            console.log(handleSubmit)

          return(
            <form onSubmit={handleSubmit}>
          <div> <Field name="email" placeholder="your email" component={Input} validate={composeValidators(required)}/></div>
            <div> <Field name="password"  placeholder="password" type="password" component={Input} validate={composeValidators(required)}/></div>
            <div> <Field name="remember_me"  type={"checkbox"} component={Input} />remember me</div>
            <div><button type="submit">Login</button> </div>
        {props.errors &&  <div className={x.formSummaryError}>{props.errors}</div>}

        </form>
        ) 
           }}
        />
    )
}
const Login=(props)=>{
    const onSubmit=(formData)=>{
       // console.log(formData);
        props.login(formData.email,formData.password,formData.rememberMe);
       
    }
     if (props.isAuth){
         return <Redirect to={"/profile"}/>
     }  
    return (<div> <h1>LOGIN</h1>
    <Loginform onSubmit={onSubmit} errors={props.errors} />
        </div>
)

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    errors:state.auth.errors

})
export default connect(mapStateToProps, { login })(Login);
