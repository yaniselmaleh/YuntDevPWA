import React, { Component } from 'react'
import Oursoupidou from '../img/oursoupidou.png';
import '../sass/components/_introduction.scss';
import '../sass/components/_cta.scss';

class LeVol extends Component {
    render(){
        return(
            <section id="introduction">
                <aside>
                    <img src={Oursoupidou} alt="Chelavier" />
                </aside>
                <article>
                    <h2>Le vol.</h2>
                    <p>
                        <b>Un produit a été volé à Boulanger,</b> nous ne savons pas encore leqel mais nous savons que <b>le voleur l'a laissé ici,</b> le problème c'est que <b>nous avons tout fouillé mais rien trouvé.</b>
                        
                        <br></br><br></br>

                        En tant que <b>détective associé,</b> aides-nous à <b>résoudre les énigmes</b> afin d'<b>élucider ce mystère</b>
                    </p>
                    <a href="/pret" className="btn-unfilled">Passer l'introduction</a>
                </article>
            </section>
        )
    }
}

export default LeVol