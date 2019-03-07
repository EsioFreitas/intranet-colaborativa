import React, { Component } from 'react';

import Input from '../../components/UI/input/Input';
import postHelper from '../../helpers/PostsHelpers';
import Perfil from '../../assets/images/perfil.jpg'

import './Feed.scss';

class feed extends Component{
    state = {
        statePosts: postHelper
    }
    render(){
        return (
            <div className="feed">
                <h1>Feed</h1>
                <Input btnClass="feed" placeholder='Compartilhe algo ...' />
                <section className="feed__container">
                    {
                        Object.keys(this.state.statePosts).map(post=>{
                            const postMap = this.state.statePosts[post];
                            return(
                                <article key={post} className='feed__article'>
                                    <div className='feed__post-person'>
                                        <img src={postMap.person.photoPerfil} />
                                        <di>
                                            <h4>{postMap.person.name}</h4>
                                            <h6>{postMap.time}</h6>
                                        </di>
                                    </div>
                                    <p className='feed__content'>{postMap.content}</p>
                                    <img src={postMap.photoPost} className='feed__img'/>
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
                                    <div className='feed__perfil-comentario'>
                                        <img src={Perfil}/>
                                        <div>
                                            <Input btnClass="feed" placeholder='Compartilhe algo ...'/>
                                        </div>
                                    </div>
                                </article>
                            )
                        })
                    }
                </section>
            </div>
        );
    }
}

export default feed;