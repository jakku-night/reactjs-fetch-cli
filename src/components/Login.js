import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            username: '',
            email: '',
            password: ''
        };
        this.sendData = this.sendData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }
    async sendData(event) {
        event.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/api/users/get/', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "Content-Type": 'application/json',
                    "Access-Control-Allow-Origin": '*'
                },
                body: JSON.stringify(this.state)
            });
            var data = await res.json();
            this.setState({ data: data });
            console.warn(this.state.data);
        } catch (e) {
            console.error(e);
        }
    }
    render() {
        return (
            <form onSubmit={this.sendData} >
                <label htmlFor="name">Name:</label>
                <input type="text" name="username" placeholder="name" onChange={this.handleChange} />
                <br/>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" placeholder="email" onChange={this.handleChange} />
                <br/>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" placeholder="password" onChange={this.handleChange} />
                <br/>
                <input type="submit" />
            </form>
        );
    }
}

export default Login;