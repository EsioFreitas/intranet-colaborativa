import React from 'react';

import Button from '../../components/UI/Button/Button';

import './Informes.scss';

const informes = () => (
    <div className='informes'>
        <h1 className='informes__title'>Informes</h1>
        <ul className='informes__list'>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
        </ul>
        <div className='informes__btn'>
            <Button btnClass="informes" type="send">Solicitar</Button>
        </div>
    </div>
);

export default informes;