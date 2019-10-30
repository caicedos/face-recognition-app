import React from 'react';
import Tilt from 'react-tilt'
import brainLogo from './brainLogo.png'
import './Logo.css'

const Logo = () =>{
    // if(true) {
    //     throw new Error('HAHAHAHAHA!');
    // }
    return(
        <div className='pa3'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner pa3"><img style={{padding:'5px'}} alt='brain logo' src={brainLogo}>
            </img>
            </div>
            </Tilt>
        </div>
    )
}



 


export default Logo;