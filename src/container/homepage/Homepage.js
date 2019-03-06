import React, {Component, Fragment} from 'react';

import Navbar from '../../components/UI/Navbar/Navbar';
import CarouselADM from '../../components/CarouselADM/CarouselADM';

import './Homepage.scss';

class Homepage extends Component{
    
    render(){
        return(
            <Fragment>
                <Navbar/>
                <CarouselADM/>
            </Fragment>
        );
    }
}

export default Homepage;