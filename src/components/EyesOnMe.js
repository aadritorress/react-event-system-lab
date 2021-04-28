// Code EyesOnMe Component Here
import React from 'react'


class EyesOnMe extends React.Component {

    handleFocus = (event) => {
        console.log('Good!');
    }

    handleBlur = (event) => {
        console.log('Hey! Eyes on me!');
    }



render()
{
    return <div> <button onFocus={this.handleFocus} onBlur = {this.handleBlur}/> </div>
}

}


export default EyesOnMe