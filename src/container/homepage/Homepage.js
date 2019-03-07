import React, { Component, Fragment } from "react";

import Navbar from "../../components/UI/Navbar/Navbar";
import CarouselADM from "../../components/CarouselADM/CarouselADM";
import Informes from "../../components/Informes/Informes";
import Grupos from "../../components/Grupos/Grupos";
import Notas from "../../components/Notas/Notas";
import Aniversariantes from "../../components/Aniversariantes/Aniversariantes";
import Feed from "../../components/Feed/Feed";
import Enquetes from "../../components/Enquetes/Enquetes";

import "./Homepage.scss";

class Homepage extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="homepage-content">
          <main>
            <CarouselADM />
            <Informes />
          </main>
          <sectio className="first-section">
            <Notas />
            <Grupos />
          </sectio>
          <section className="second-section">
            <Feed />
            <div className="second-section__group">
              <Aniversariantes />
              <Enquetes />
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}

export default Homepage;
