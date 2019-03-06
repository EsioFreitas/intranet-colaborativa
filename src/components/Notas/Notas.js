import React, {Component} from 'react'

import './Notas.scss';

class Notas extends Component{
    state = {
        stateNotas: ["ooooi", "tud bom com vc?sdadasda adas dasdsasdasfs fasafasd a"
        , "tud bom com vc?sdadasda adas dasdsasdasfs fasafasd a", "tud bom com vc?sdadasda adas dasdsasdasfs fasafasd a"
        , "tud bom com vc?sdadasda adas dasdsasdasfs fasafasd a"
        , "tud bom com vc?sdadasda adas dasdsasdasfs fasafasd a"]
    }
    render(){
        return(
            <div className='notas'>
                <h1>Notas</h1>
                <div className="notas__container">
                    <ul className='notas__list'>
                        {
                            this.state.stateNotas.map((notas, idx)=>(
                                <li key={idx}>
                                    <div onClick={()=>this.deleteNota(idx)}><p>x</p></div>
                                    <p className='notas__content'>{notas}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                
            </div>
        );
    }

    deleteNota = idx => {
        const tmp = [...this.state.stateNotas];
        tmp.splice(idx, 1);
        this.setState({stateNotas: tmp});
    }
}

export default Notas;