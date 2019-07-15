import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

import '../sass/components/_reset.scss';
import '../sass/components/_Swiper.scss';
import '../sass/components/_cta.scss';

import Concept from '../img/yunt-concept.png';
import Progression from '../img/yunt-progression.png';
import Recompense from '../img/testgif.gif';
import BotImage from '../img/oursoupidou.png';

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Slide extends Component {
  render() {
    return (
      <Swiper className="slider_onboarding">
        {/* <SlideLayout image={img1} title="coucouc" description="lorem"/> */}

        <div className="slider_onboarding">
            <img src={Concept} alt="Concept"/>
            <h2>Concept</h2>
            <p>Participez à un <b>escape game dans nos magasins partenaires</b> partout en <b>France</b> et <b>gagnez de nombreuses récompenses.</b></p>
            {/* <Link to="/enigmes1" className="unfilled">Enigme1</Link> */}
            {/* <Link to="/enigme1">Passer l'introduction</Link> */}
            <a href="/niveau">Passer l'introduction</a>
        </div>

        <div className="slider_onboarding">
            <img src={Progression} alt="Progression"/>
            <h2>Progression</h2>
            <p><b>Choisissez</b> votre niveau de difficulté, <b>surmontez</b> les épreuves et <b>évoluez</b> pour <b>gagner davantage de lots.</b></p>
            <a href="/niveau">Passer l'introduction</a>
        </div>

        <div className="slider_onboarding">
            <img src={Recompense} alt="Recompense"/>
            <h2>Récompenses</h2>
            <p>( On sait que c’est ce qui t’intéresse )<b>Un pourcentage de réduction</b> en fonction du temps impartis dans <b>nos magasins partenaires !</b></p>
            <a href="/niveau">Passer l'introduction</a>
        </div>

        <div className="slider_onboarding">
            <img src={BotImage} alt="Oursoupidou"/>
            <h2>Oursoupidou</h2>
            <p>Bonjour, <b>je suis Oursoupidou</b> ! Je te <b>conseillerai</b> durant ton parcours ici, si tu as <b>une question</b> ou <b>besoin d’indices</b>, n’hésites pas !</p>
            <br></br>
            <div>
            {/* <Link to="/enigme1" className="btn-unfilled">Enigme1</Link> */}
            </div>
            <a href="/niveau" className="btn-unfilled">Commencer l'aventure</a>
            <a href="/niveau" id="next_intro">Passer l'introduction</a>
        </div>      
      </Swiper>
    )
  }
}