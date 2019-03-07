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
                       click={()=>this.newpost(this.state.postText)}
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
                                            <Input btnClass="feed" placeholder='Compartilhe algo ...'/>
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

    newpost = (tex) =>{
        
        const newPost = {
            person:{
                name: "Bruna Pinos",
                photoPerfil: Perfil
            },
            content: this.state.postText,
            photoPost: null,
            time: "Agora",
            comentarios: null
        }
        
        let tmp = [
            ...this.state.statePosts,
            newPost
            
        ];
        
        
        console.log(tmp)
        
       this.setState({statePosts: tmp, postText: ''})
    }

    newComent = () =>{

    }

}

export default feed;