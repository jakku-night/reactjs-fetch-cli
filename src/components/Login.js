import React, { useReducer } from 'react';

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
        this.login = this.login.bind(this);
    };
    static contextType = user;
    login = async (event) => {
        event.preventDefault();
        var form = new FormData(event.currentTarget);
        try{
            const res = await fetch(event.target.action,{
                method: event.target.method,
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
                body: form
            });
            var data = await res.json();
            this.context = data;
            console.log(this.context);
        }catch(error){
            console.error(error);
        }
    };
    render = () => (
        <div>
            <form action="http://localhost:3000/api/login/" method="post" encType="multipart/form-data" onSubmit={this.login} >
                <div className="form-group">
                  <label htmlFor="user">User:</label>
                  <input type="text" className="form-control" name="user" id="user" aria-describedby="helpId" placeholder="User" autoFocus="true" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelpId" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="pass">Password:</label>
                    <input type="password" className="form-control" name="pass" id="pass" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};