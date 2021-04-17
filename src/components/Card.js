import React from "react";

class Card extends React.Component{
    render(){
        return (
            <div>
                <h1>Hola</h1>
                <h1>{this.props.user}</h1>
            </div>
        );
    }
}

export default Card;