import React, {Component} from 'react';

class EventBindingArrow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:'Before Click!!'
        }
    }
 /** It is recomended to use when we need parameter in click event*/
    myClick() {
        this.setState({
            message:'After click!!!'
        })
    }
    render() {
        return(
        <div>
            <p>{this.state.message}</p>
            <button onClick={()=> this.myClick()}>CLICK</button>
        </div>
        )
    }
}

export default EventBindingArrow