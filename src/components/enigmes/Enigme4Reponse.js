import React, { Component } from 'react'
// import '../../sass/components/_reset.scss'
import '../../sass/components/_LayoutEnigmes2.scss'
import '../../sass/components/_cta.scss'
import Time from '../../img/time.svg';
import Oursoupidou from '../../img/oursoupisearch.png';
import ProgressBar from '../ProgressBar';


class Enigme4Reponse extends Component {

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
                    <form>
                     <input type="text" placeholder="_ _ _ _ _ _ _ _"/>
                    </form>
                </section>
                
                <section id="EnigmeCta"  className="EnigmeFlex">
                    <div>
                        <a href="/fin-enigme-boulanger" className="btn-unfilled">Valider</a>
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

export default Enigme4Reponse