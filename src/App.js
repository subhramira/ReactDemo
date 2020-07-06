import React from 'react';
import './App.css';
import  Demo from './components/Demo';
import {DemoClass} from './components/DemoClass'
import JsxDemo from './components/jsxDemo';
import {StateDemo } from './components/stateDemo'
import { Counter } from './components/counter';
import EventHandelFunc from './components/eventhandeling/eventhandelingfunc';
import EventHandelingClass from './components/eventhandeling/eventhandelingclass';
import EventBindingBind from './components/eventBinding/eventbinding_bind';
import EventBindingArrow from './components/eventBinding/eventbinding_arrow'
import EventBindingConstructor from './components/eventBinding/eventbinding_constructor';
import EventBindingArrowHandeler from './components/eventBinding/eventbinding_arrowhandeler';
import ParentComponent from './components/methodAsProps/parent';
function App() {
  return (
    <div className="App">
     {/* <Demo name="Subhransu" age="30">
       <p>Owner</p>
     </Demo>

     <Demo name="Saroj" age="29"/>
     <Demo name="Nitish" age="25"/>
     <DemoClass number="1" course="Angular">
       <span>UI</span>
     </DemoClass>
     <DemoClass number="2" course="C#">
       <h3>Backend</h3>
     </DemoClass>
     <DemoClass number="3" course="Selenium">
       <p>Testing</p>
    </DemoClass>
     <JsxDemo></JsxDemo> 
     <StateDemo></StateDemo>*/}
     {/* <Counter></Counter> */}
     {/* <EventHandelFunc></EventHandelFunc> */}
     {/* <EventHandelingClass></EventHandelingClass> */}
    {/* <EventBindingBind></ EventBindingBind> */}
    {/* <EventBindingArrow></EventBindingArrow> */}
    {/* <EventBindingConstructor></EventBindingConstructor> */}
    {/* <EventBindingArrowHandeler></EventBindingArrowHandeler> */}
    <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;
