import React, {Component} from 'react';

/* jsx-using functional component*/
// function JsxDemo () {
//     return (
//         <div className='myClass'>
//             <h1>My Jsx Demo</h1>
//         </div>
//     )
// }

/** Jsx using class component */
class JsxDemo extends Component {
    render() {
        return (
           <div>
               <h1>jsx demo.....</h1>
           </div> 
        )
    }
}

/** without using jsx */

// function JsxDemo () {
//     return React.createElement('div',{className:'myClass'}, React.createElement(
//         'h1', null , 'Text from without using JSX'
//     ))
// }

export default JsxDemo;