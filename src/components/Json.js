import React from 'react';

class Json extends React.Component{
    async fetch_user(){
        try{
            const response = await fetch('localhost:3000/api/test');
            console.log(await response.json());
            return await response.json();
        }catch(error){
            console.log(error);
        }
    };
    render(){
        const data = this.fetch_user(); 
        console.log(data);
        return (
            <h3>{data}</h3>
        );
    }
}

export default Json;