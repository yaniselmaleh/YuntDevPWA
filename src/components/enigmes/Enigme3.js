import React, { Component } from 'react'
// import '../../sass/components/_reset.scss'
import '../../sass/components/_LayoutEnigmes2.scss'
import '../../sass/components/_cta.scss'
import Time from '../../img/time.svg';
import Oursoupidou from '../../img/oursoupisearch.png';
import ProgressBar from '../ProgressBar';


class Enigme3 extends Component {

    constructor(props){
        super(props);
        
          this.state = {
          percentage: 50 
        }
      }
    render(){
        return(
            <div>
                <section id="timmer" className="EnigmeFlex">
                    <img src={Time} alt="timmer" id="EnigmeTime"/>
                    <p>9:45</p>
                </section>
                
                <section id="EnigmeImg"  className="EnigmeFlex">
                <div>
                    <img src={Oursoupidou} alt="Oursoupidou"/>
                </div>
                </section>
                
                <section id="EnigmeContent"  className="EnigmeFlex">
                    <p>
                        Nous avons eu accès aux caméras de surveillance, hélas ce n'est pas très net.

                        <br></br><br></br>

                        Je t'envoie àa sur ton appareil, <b>tu verras sûrement plus de choses que moi. Tu as reconnu le produit que le voleur a pris ?</b>    
                    </p>
                </section>
                
                <section id="EnigmeCta"  className="EnigmeFlex">
                    <div>
                        <a href="/enigme3-reponse" className="btn-unfilled">Voir l'image</a>
                        <br></br>
                        <a href="/enigme1" className="btn-filled">Indice</a>
                    </div>   
                </section>
                <section id="EnigmeProg" className="EnigmeFlex">
                    <p>Progression</p>
                    <ProgressBar percentage={this.state.percentage}/>
                </section>
            </div>
        )
    }
}

export default Enigme3