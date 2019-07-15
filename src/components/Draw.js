import React, { Component } from 'react'
import CanvasDraw from "react-canvas-draw";

import Oursoupidou from "../img/oursoupidou.png";
import '../sass/components/_cta.scss';
import '../sass/components/_draw.scss';

class Draw extends Component {

    render(){
        return(
            <section id="introduction">
                <aside>
                    <img src={Oursoupidou} alt="Chelavier" />
                </aside>
                <article id="draw">
                    <CanvasDraw style={{
                        boxShadow:"0 13px 27px -5px rgba(50, 50, 93, 0.25),0 8px 16px -8px rgba(0, 0, 0, 0.3)"   
                    }}/>
                    <br/>
                    <a href="/enigme2" className="btn-unfilled" id="inputdraw">Valider le dessins</a>
                </article>
            </section>
        )
    }
}

export default Draw