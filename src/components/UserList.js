import React from 'react';

export default class UserList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
        this.getUsers = this.getUsers.bind(this);
    };

    getUsers = () => {
        
    };

    render = () => (
        <div>

        </div>
    );
}