import React, {Component, Fragment} from 'react';

import Navbar from '../../components/UI/Navbar/Navbar';
import CarouselADM from '../../components/CarouselADM/CarouselADM';
import Informes from '../../components/Informes/Informes';
import Grupos from '../../components/Grupos/Grupos';
import Notas from '../../components/Notas/Notas';
import Feed from '../../components/Feed/Feed';

import './Homepage.scss';

class Homepage extends Component{
    
    render(){
        return(
            <Fragment>
                <Navbar/>
                <div className="homepage-content">
                    <CarouselADM/>
                    <Informes/>
                    <Grupos/>
                    <Notas/>
                    <Feed/>
                </div>
            </Fragment>
        );
    }
}

export default Homepage;