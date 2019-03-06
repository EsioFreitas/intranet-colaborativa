import React from 'react';

import './Input.scss';


const input = props => (
    <div className='post-intup'>        
        <input type="text" placeholder="Crie uma nota ..." onChange={props.change} value={props.value}/>
        <div className='post-intup__submit' onClick={props.click}>&#10095;</div>    
    </div>
);

export default input;