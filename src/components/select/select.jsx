import React from 'react';
import cl from './select.module.css'

const Select = (props) => {
    return (
        <div className={cl.box}>
            <select {...props}>
                {props.options.map((item)=><option>{item}</option>)}    
            </select>           
        </div>
    );
}

export default Select;