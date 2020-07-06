import React, {Component} from 'react';
export class DemoClass extends Component {
    render() {
        return (
            <div>
                <h5>Course : {this.props.course}</h5>
                <h5>No  : {this.props.number}</h5>
                {this.props.children}
            </div>
        )
    }
}