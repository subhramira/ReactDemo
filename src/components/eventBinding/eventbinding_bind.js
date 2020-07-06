import React, {Component} from 'react';

class EventBindingBind extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:'Before Click!!'
        }
    }
 /** In this step of event binding performance will reduce */
    myClick() {
        this.setState({
            message:'After click!!!'
        })
    }
    render() {
        return(
        <div>
            <p>{this.state.message}</p>
            <button onClick={this.myClick.bind(this)}>CLICK</button>
        </div>
        )
    }
}

export default EventBindingBind