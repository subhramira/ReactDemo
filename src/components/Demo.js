import React from 'react';
function Demo(props) {
  return (
<div>
<h5>Name : {props.name}</h5>
<h5>Age : {props.age}</h5>
{props.children}
</div>    
 )  
 }

 export default Demo;

// export const Demo = (props) => {
//  return (
// <div>
// <h5>Name : {props.name}</h5>
// <h5>Age : {props.age}</h5>
// </div>    
//  )   

// }