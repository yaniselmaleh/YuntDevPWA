import React, { Component } from 'react'
// import '../sass/components/_test.scss'
import Cta from './Cta'

class Test extends Component {
    render(){
        return(
            <div><Cta name="jh <b>hello</b> ergergerger g<b>coucou</b>" title="hello" className="filled" url="#concept"/></div>
        )
    }
}

export default Test