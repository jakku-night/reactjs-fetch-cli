import React from 'react';

class Clock extends React.Component{
    render(){
        return (
            <h3>It's: {new Date().toLocaleTimeString(en-us)}</h3>
        );
    }
}

export default Clock;