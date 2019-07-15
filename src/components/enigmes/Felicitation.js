import React, { Component } from 'react'

import '../../sass/components/_reset.scss';
import '../../sass/components/_Felicitation.scss';
import '../../sass/components/_cta.scss';
import Time from '../../img/time.svg';

import Tresor from '../../img/treesor.png';

class Felicitation extends Component {
    render(){
        return(
            <div className="felicitation">
            <img src={Tresor} alt="Concept"/>
            <h2>Félicitations !</h2>
            <p>Bonnes réponses : <b>3 sur 8</b></p>
            <p>Classement : <b>2ème sur 10</b></p>
            <p>
            <br></br>
                <img src={Time} alt="timmer" id="Time1"/>
                9:45
            </p>

            <br></br>
            <span id="data_victoire">
                YUNO
            </span>
            <br></br>
            <br></br>
            <a href="/" className="btn-filled">Retour au menu</a>
        </div>
        )
    }
}

export default Felicitation