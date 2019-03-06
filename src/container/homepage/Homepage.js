import React, {Component, Fragment} from 'react';

import Navbar from '../../components/UI/Navbar/Navbar';
import CarouselADM from '../../components/CarouselADM/CarouselADM';
import Informes from '../../components/Informes/Informes';

import './Homepage.scss';

class Homepage extends Component{
    
    render(){
        return(
            <Fragment>
                <Navbar/>
                <div className="homepage-content">
                    <CarouselADM/>
                    <Informes/>
                </div>
            </Fragment>
        );
    }
}

export default Homepage;