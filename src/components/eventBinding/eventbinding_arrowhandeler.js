

import React, {Component} from 'react';
class EventBindingArrowHandeler extends Component {
    constructor(props){
        super(props)
        this.state = {
            message:'Before Click '
        }
    }

    /** it is another official approach for event binding */
    myClick = () => {
        this.setState({
            message:'After Click!!!'
        })
    }
    render() {
        return(
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.myClick}>CLICK</button>
            </div>
        )
    }
}

export default EventBindingArrowHandeler