import React, {Component} from 'react'

import Input from '../UI/input/Input';

import './Notas.scss';

class Notas extends Component{
    state = {
        stateNotas: ["Digite e envie uma nota!! Juro que funciona! kkk"],
        text: ''
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
                <Input click={this.saveNota} 
                       change={(event)=>this.onchageHandle(event)}
                       value={this.state.text}
                       placeholder="Crie uma nota ..."
                       btnClass="notas"/>
            </div>
        );
    }

    deleteNota = idx => {
        const tmp = [...this.state.stateNotas];
        tmp.splice(idx, 1);
        this.setState({stateNotas: tmp});
    }

    saveNota = () => {
        if(this.state.text === '') return;

        let tmp = [...this.state.stateNotas];
        tmp.push(this.state.text);
        this.setState({stateNotas: tmp, text: ""});
    }

    onchageHandle = (event) => {
        this.setState({text: event.target.value})
    }

}

export default Notas;