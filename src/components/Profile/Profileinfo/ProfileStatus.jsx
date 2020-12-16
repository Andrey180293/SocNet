import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ProfileStatus =(props)=> {
    
let[editMode,setEditMode]=useState(false);
let[status,setStatus]=useState(props.status);
useEffect(()=>{
    setStatus(props.status);
},[props.status]);

 const   statusChange = (event) => {
        setStatus(event.target.value);
    }
    const acivateEditMode=()=> {
        setEditMode(true);
    }
 const   deacivateEditMode=()=> {
        setEditMode(false);
        props.updateStatus(status)
    }
  /*  componentDidUpdate(prevProps,prevState){
        if (prevProps.status!==this.props.status){
        this.setState({
            status:this.props.status
        });
    }
    }*/
    
   
        return (<>
            <div>
                {!editMode &&
                    <div><span onDoubleClick={acivateEditMode}>{props.status ||"-|+_+|-"} </span></div>
                }

                {editMode &&
                    <div>   <input  
                    onChange={statusChange}
                    autoFocus={true} onBlur={deacivateEditMode}  value={status}/>
                    </div>
                }
            </div>

</>
        )
    }

export default ProfileStatus