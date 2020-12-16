import React from 'react';
import x from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Form, Field } from 'react-final-form'
import {composeValidators, required } from '../utils/validators'
import { Textarea } from '../common/FormsControls/FormsControl';

const Dialogs = (props) => {
    let state = props.dialogState;

    let DialogElements = state.dialogData.map(p => <DialogItem name={p.name} id={p.id} />);


    let MessageElements = state.messageData.map(props => <Message message={props.message} id={props.id} />);

 
    return (
        <div className={x.dialogs}>

            <div className={x.dialogsItems}>

                {DialogElements}


            </div>
            <div className={x.messages}>

                {MessageElements}
                <AddMessageForm addMessage={props.addMessage} />
            </div>
        </div>
    )
}



  const AddMessageForm = (props) => {
    const OnaddMessage = (values) => {
        props.addMessage(values.NewMessage);

    }
    return (
        <Form
            onSubmit={OnaddMessage}
                   
            render={({ handleSubmit, form, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit}>

 <Field name="NewMessage"  validate={composeValidators(required) } component={Textarea}/>
            
            
                    {/* <Field name="NewMessage" component="textarea" placeholder="text" /> */}


                    <button type="submit">Submit</button>
                </form>
            )}
        />)

}
export default Dialogs;