import React, {Component} from 'react';
import ChildComponent from './child';

class ParentComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'subhransu'
        }
        this.getAlert = this.getAlert.bind(this)
    }

    getAlert(childMsg){
        alert(`name in parent ${this.state.name} from ${childMsg}`)
    }

    render() {
        return(
            <div>
                <ChildComponent myAlert={this.getAlert}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent