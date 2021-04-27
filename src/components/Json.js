import React from 'react';

class Json extends React.Component{
    constructor(props) {
        super(props);
        this.state = { data: [] };

        this.sendHello = this.sendHello.bind(this);
    }
    async sendHello(){
        var hello = { message: 'hello' };
        await fetch('http://localhost:3000/', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": 'application/json',
                "Access-Control-Allow-Origin": '*'
            },
            body: JSON.stringify(hello)
        });
    }
    render(){
        return (
            <button onClick={this.sendHello}>Push me</button>
        );
    }
}

export default Json;