import React from 'react';
import FileCard from './FileCrad';
import bootstrap from 'bootstrap';

export default class Navigator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [1,2,3,4,5,5,6,7,8,9,10]
        };
        //this.cardList = this.cardList.bind(this);
    }
    data = [1,2,3,4,5,6,7,8,9,10];
    cardList = this.data.map((number)=> <li className="card-title" key={number.toString()} >{number}</li>);
    render = () => (
        <div className="card">
            <img className="card-img-top" data-src="holder.js/100x180/?text=Image cap" alt="Card image cap" />
            <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Text</p>
            </div>
            <ul className="list-group list-group-flush">
                {this.cardList}
            </ul>
        </div>
    );    
};