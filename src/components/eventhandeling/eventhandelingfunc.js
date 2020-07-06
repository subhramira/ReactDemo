import React from 'react';

function EventHandelFunc() {
    function myClick() {
        console.log('Clicked happen')
    }

    return(
        <div>
            <button onClick={myClick}>Click</button>
        </div>
    )
}

export default EventHandelFunc;