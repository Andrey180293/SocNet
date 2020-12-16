import React from 'react';



export const required = value => (value ? undefined : 'Required')

export const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)

export const minValue = min => value =>(
value.lenght <= min ? undefined:`Should be greater than ${min}` )

export  const maxValue =(maxLength) =>{
return (value) =>{
 if (value.lenght> maxLength) return`Should be greater than ${maxLength}`;
 return undefined ;}
}
 
 export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)
  export const ml=minValue(10);