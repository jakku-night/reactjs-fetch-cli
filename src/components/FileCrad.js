import React from 'react';
import bootstrap from 'bootstrap';

export default class FileCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    render = () => (
        <div class="card">
            <img class="card-img-top" src={this.props.image} alt={this.props.name} />
            <div class="card-body">
                <h4 class="card-title">{this.props.name}</h4>
                <p class="card-text"><button type="button" class="btn btn-primary">Entrar</button></p>
            </div>
        </div>
    );
};