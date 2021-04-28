// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

//need to create event handler <<<<<
passwordPrint = event => {
    console.log('Entering password...')
}



render()
{
return (
    //create div
    //add an input 
    <div> <input type ='password' onKeyUp = {this.passwordPrint} /> 
    {/* after event > onKeyUp <  call this. eventListenerCreated */}
    </div>
)
}


}
export default Keypad