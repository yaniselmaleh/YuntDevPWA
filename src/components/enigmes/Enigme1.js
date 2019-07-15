import React, { Component } from 'react';
import {isBrowser} from 'react-device-detect';
import Popup from "reactjs-popup";


import '../../sass/components/_LayoutEnigmes.scss';
import Time from '../../img/time.svg';

import Oursoupidou from '../../img/inspecteur.gif';
import LayoutEnigmeCta from '../Layout/Enigmes/LayoutEnigmeCta';
import LayoutEnigmeText from '../Layout/Enigmes/LayoutEnigmeText';
import ProgressBar from '../ProgressBar';

import IsLaptop from '../IsLaptop';
// import Countdown from 'react-countdown-now';

class Enigme1 extends Component {
    
    constructor(props){
        super(props);
        
          this.state = {
          percentage: 15 
        }
      }

    renderContent = () => {
        if (isBrowser) {
            return <section id="laptop"><IsLaptop/></section>
        }
        return <div>

        <section id="timmer" className="EnigmeFlex">
            <img src={Time} alt="timmer" id="EnigmeTime"/>

            {/* <p><Countdown date={Date.now() + 10000} /></p> */}
            <p>9:40</p>
        </section>

        <section id="EnigmeImg" className="EnigmeFlex">
            <div>
                <img src={Oursoupidou} alt="Oursoupidou"/>
            </div>
        </section>

        <section id="EnigmeContent" className="EnigmeFlex">
            <LayoutEnigmeText name="<b>Un produit n’est pas dans son rayon habituelle</b>,</br>on dirait presque qu’il a été déplacé volontairement !</br></br>C’est peut-être une première piste, <b>quel est le produit</b> ?"/>
        </section>

        <section id="EnigmeCta" className="EnigmeFlex">
            <div>
                <LayoutEnigmeCta name="J'ai trouvé" title="j'ai trouvé" className="unfilled" url="/enigme1-reponse"/>
                <br></br>

                <Popup trigger={<a className="btn-filled" title="hello" target="">Indice</a>} position="top center">
                    {close => (
                        <p>
                            <a className="close" onClick={close}><b>X</b></a>
                            
                            Indice
                        </p>
                    )}
                </Popup>
            </div>
        </section>

        {/* <section><p>ProgressBar</p></section> */}

        <section id="EnigmeProg" className="EnigmeFlex">
        <p>Progression</p>
        <ProgressBar percentage={this.state.percentage}/>
    </section>
    </div>
    }

    render(){
        return this.renderContent();
    }
}

export default Enigme1