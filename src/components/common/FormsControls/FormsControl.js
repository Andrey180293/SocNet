import React from 'react';
import x from './FormsControl.module.css';


const FormControl = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={x.formControl + " " + (hasError ? x.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, ...restProps }=props;
  return  <FormControl {...props}> <textarea {...input}{...restProps} /></FormControl>
}
export const Input = (props) => {
    const { input, meta, ...restProps }=props;

    return   <FormControl {...props}> <input {...input}{...restProps} /> </FormControl>
}


