import React, {Component} from 'react';
class EventBindingConstructor extends Component {
    constructor(props){
        super(props)
        this.state = {
            message:'Before Click '
        }
        this.myClick = this.myClick.bind(this)
    }

    /** it is official approach for event binding */
    myClick() {
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

export default EventBindingConstructor