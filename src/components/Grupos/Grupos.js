import React from 'react';

import gruposHelper from '../../helpers/GruposHelpers';
import Grupo from './Grupo/Grupo';

import './Grupos.scss';

const grupos = () => (
    <div>
        {
            Object.keys(gruposHelper).map(grupo=>(
                <div key={grupo}>
                    <Grupo/>
                </div>
            ))
        }
    </div>
);

export default grupos;