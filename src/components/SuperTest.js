import React from 'react';
import Popup from "reactjs-popup";
class SuperTest extends React.Component {

        render (){
            return(
           <div>       
           <br></br>     
           <br></br>     
           <br></br>     
           <br></br>     
           <br></br>     
           <br></br>     
           <br></br>     
           <br></br>     
           <br></br>     
           <br></br>     
           <br></br>     
           <br></br>     
           <br></br> 
           <center>

                <Popup trigger={<button>Indice</button>} position="top center">
                    {close => (
                        <p>
                            Indice
                            <a className="close" onClick={close}><b>X</b></a>
                        </p>
                    )}
                </Popup>

           </center>    
           </div>

            )
        }
}

export default SuperTest