import React, {Component} from 'react'

class EventHandelingClass extends Component {
    myClick() {
        console.log('clicked in class');
    }
    render() {
        return(
            <div>
                <button onClick={this.myClick}>CLIK</button>
            </div>
        )
    }
}

export default EventHandelingClass;