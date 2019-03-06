import React from 'react';

import Button from '../../UI/Button/Button';

import './Grupo.scss';

const grupo = props =>(
    <div className='grupo'>
        <img src={props.photo} alt="" className='grupo__photo'/>
        <div className='grupo__description'>
            <h2 className='grupo__title'>{props.content}</h2>
            <Button btnClass="grupos" type="send">Visualizar</Button>
        </div>
    </div>
);

export default grupo;