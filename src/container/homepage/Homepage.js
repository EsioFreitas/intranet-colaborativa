import React, {Component, Fragment} from 'react';

import Navbar from '../../components/UI/Navbar/Navbar'

import './Homepage.scss';

class Homepage extends Component{
    
    render(){
        return(
            <Fragment>
                <Navbar/>
            </Fragment>
        );
    }
}

export default Homepage;