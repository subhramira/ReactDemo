import React, {Component} from 'react';
export class StateDemo extends Component {
    constructor () {
        super ();
        this.state = {
            message : 'Welcome to React'
        }
    }
    change() {
        this.setState({
            message: 'Thank you!!!'
        })
    }

    render() {
        return (
            <div>
                <h1> {this.state.message}</h1>
                <button onClick={() => this.change()}>  Click</button>
            </div>
        )
    }
}