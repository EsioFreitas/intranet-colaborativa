import React from 'react';

import Input from '../../components/UI/input/Input';

import './Feed.scss';

const feed = props => {
    return(
        <div className="feed">
            <h1>Feed</h1>
            <Input btnClass="feed" placeholder='Compartilhe algo ...'/>
            <section  className="feed__container">

            </section>
        </div>
    );
}

export default feed;