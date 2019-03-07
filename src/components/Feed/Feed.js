import React, { Component } from 'react';

import Input from '../../components/UI/input/Input';
import postHelper from '../../helpers/PostsHelpers';
import Perfil from '../../assets/images/perfil.jpg'

import './Feed.scss';

class feed extends Component{
    state = {
        statePosts: postHelper,
        postText: '',
        comentText: ''
    }

    render(){
        return (
            <div className="feed">
                <h1>Feed</h1>
                <Input btnClass="feed" placeholder='Compartilhe algo ...' 
                       click={this.newpost}
                       value={this.state.postText}
                       change={(event)=>this.setState({postText: event.target.value})}/>
                <section className="feed__container">
                    {
                        Object.keys(this.state.statePosts).map((post,idx)=>{
                            const postMap = this.state.statePosts[idx];
                            return(
                                <article key={post} className='feed__article'>
                                    <div className='feed__post-person'>
                                        <img src={postMap.person.photoPerfil} />
                                        <div>
                                            <h4>{postMap.person.name}</h4>
                                            <h6>{postMap.time}</h6>
                                        </div>
                                    </div>
                                    <p className='feed__content'>{postMap.content}</p>
                                    {postMap.photoPost ? 
                                    <img src={postMap.photoPost} className='feed__img'/>
                                    : null}

                                    { postMap.comentarios ? 
                                    <ul className='feed__comentarios'>
                                        {
                                            Object.keys(postMap.comentarios).map(comentario => (
                                                <li key={comentario} className='feed__comentario'>
                                                    <img src={postMap.comentarios[comentario].photoComentario}/>
                                                    <div>
                                                        <h5>{postMap.comentarios[comentario].nome}</h5>
                                                        <p>{postMap.comentarios[comentario].comentario}</p>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    : null}
                                    <div className='feed__perfil-comentario'>
                                        <img src={Perfil}/>
                                        <div>
                                            <Input btnClass="feed" placeholder='Compartilhe algo ...'
                                            click={()=>this.newComent(idx)}
                                            value={this.state.comentText}
                                            change={(event)=>this.setState({comentText: event.target.value})}/>
                                        </div>
                                    </div>
                                </article>
                            )
                        }).reverse()
                    }
                </section>
            </div>
        );
    }

    newpost = () =>{
        const newPost = {
            person:{
                name: "Bruna Pinos",
                photoPerfil: Perfil
            },
            content: this.state.postText,
            photoPost: null,
            time: "Agora",
            comentarios: []
        }
        let tmp = [
            ...this.state.statePosts,
            newPost
        ];
        this.setState({statePosts: tmp, postText: ''})
    }

    newComent = (idx) =>{
        console.log(this.state.statePosts[idx].comentarios.length);
        let stateTmp = [...this.state.statePosts]
        const newComent = {
            nome: "Bruna Pinos",
            comentario: this.state.comentText,
            photoComentario: Perfil
        }
        let tmp = [...this.state.statePosts[idx].comentarios]
        tmp.push(newComent);
        stateTmp[idx].comentarios = tmp
        this.setState({statePosts: stateTmp, comentText: ''})
    }

}

export default feed;