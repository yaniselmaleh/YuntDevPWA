import React, { Component } from 'react'
// import '../../sass/components/_reset.scss'
import '../../sass/components/_LayoutEnigmes2.scss'
import '../../sass/components/_cta.scss'
import Time from '../../img/time.svg';
import Oursoupidou from '../../img/oursoupisearch.png';
import ProgressBar from '../ProgressBar';


class Enigme4 extends Component {

    constructor(props){
        super(props);
        
          this.state = {
          percentage: 80 
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
                        Super ! Je pense qu’il faut se <b>rendre à cet endroit</b>, on m’informe que le voleur y a laissé un mot.
                        <br></br>
                        C’est peut-être un <b>indice pour le code du téléphone</b>, qu’y a-t-il marqué ?   
                    </p>
                </section>
                
                <section id="EnigmeCta"  className="EnigmeFlex">
                    <div>
                        <a href="/enigme4-reponse" className="btn-unfilled">J'ai trouvé</a>
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

export default Enigme4