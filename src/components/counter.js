import React,{ Component } from "react";

export class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count:0
        }
    }
    increament() {
        this.setState({
            count : this.state.count + 1
        }, ()=> {
            console.log('countfromsetstate', this.state.count)
        })
        console.log('count', this.state.count)
    }
    render() {
        return(
            <div>
                <p>Count : {this.state.count}</p>
                <button onClick={()=>this.increament()}>Increment</button>
            </div>
        )
    }
}