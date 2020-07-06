import React, {Component} from 'react'

// function ChildComponent(props) {
//     return(
//         <div>
//             <button onClick={()=>props.myAlert('child')}>MethodAsProps</button>
//         </div>
//     )
// }

class ChildComponent extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div>
                <button onClick={()=>this.props.myAlert('child')}>MethodAsProps</button>
            </div> 
        )
    }
}

export default ChildComponent