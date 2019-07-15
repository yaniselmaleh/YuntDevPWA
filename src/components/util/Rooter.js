import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Enigme1 from '../enigmes/Enigme1';
import Enigme1Reponse from '../enigmes/Enigme1Reponse'
import Enigme2 from '../enigmes/Enigme2'
import Enigme3 from '../enigmes/Enigme3'
import Enigme3Reponse from '../enigmes/Enigme3Reponse'
import Enigme4 from '../enigmes/Enigme4'
import Enigme4Reponse from '../enigmes/Enigme4Reponse'
import Draw from '../Draw'
import EnigmeEnd from '../enigmes/EnigmeEnd'
import Felicitation from '../enigmes/Felicitation'

import Loader from '../Loader'
import Niveau from '../Niveau'
import NiveauError from '../NiveauError'
import Slide from '../Slide'
import BrandSection from '../BrandsSection'
import MapBoulanger from '../MapDirection'
import LeVol from '../LeVol.js'
import Ready from '../Ready.js'

import SuperTest from '../SuperTest';


class Rooter extends Component {
    render(){

        const Root = () => (
            <Switch>
                <Route exact path="/" component={Loader} />
                <Route path="/slide" component={Slide} />
                <Route path="/niveau" component={Niveau} />
                <Route path="/niveauerror" component={NiveauError} />
                <Route path="/section" component={BrandSection} />
                <Route path="/introduction" component={LeVol} />
                <Route path="/pret" component={Ready} />

                <Route path="/test" component={SuperTest} />
                
                
                <Route path="/enigme1" component={Enigme1} />
                <Route path="/enigme1-reponse" component={Enigme1Reponse} />
                <Route path="/enigme2" component={Enigme2} />
                <Route path="/enigme3" component={Enigme3} />
                <Route path="/enigme3-reponse" component={Enigme3Reponse} />
                <Route path="/enigme4" component={Enigme4} />
                <Route path="/enigme4-reponse" component={Enigme4Reponse} />
                <Route path="/draw" component={Draw} />
                <Route path="/fin-enigme-boulanger" component={EnigmeEnd} />
                <Route path="/felicitation" component={Felicitation} />


                <Route path="/map" component={MapBoulanger} />
                {/* Pour la 404 <Route component={404} /> */}
            </Switch>
        )

        return(
            <Router>
                <Root/>
            </Router>
        )
    }
}

export default Rooter;