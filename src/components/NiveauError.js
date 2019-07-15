import React, { Component } from 'react'
import Oursoupidou from '../img/oursoupidou.png';
import '../sass/components/_NiveauError.scss';
import '../sass/components/_cta.scss';

class NiveauError extends Component {
    render(){
        return(
            <section id="NiveauError">
                    <aside>
                        <img src={Oursoupidou} alt="Chelavier" />
                    </aside>
                    <article>
                        <h2>Aïe !</h2>
                        <p>On comprend que vous voulez tout de suite <b>passer aux choses
                        sérieuses…</b> faites vos preuves
                        au <b>premier niveau afin de débloquer celui-ci</b></p>
                        <a href="/Niveau" className="btn-unfilled">Retour au menu</a>
                    </article>
                </section>
        )
    }
}

export default NiveauError