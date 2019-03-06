import React from 'react';

import gruposHelper from '../../helpers/GruposHelpers';
import Grupo from './Grupo/Grupo';

import './Grupos.scss';

const grupos = () => (
    <div className="grupos">
        <h1>Grupos</h1>
        {
            Object.keys(gruposHelper).map(grupoH => (
                <div key={grupoH}>
                {console.log(gruposHelper[grupoH].title)}
                    <Grupo content={gruposHelper[grupoH].title} photo={gruposHelper[grupoH].photo}/>
                </div>
            ))
        }
    </div>
);

export default grupos;