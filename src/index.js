import React from 'react';
import ReactDOM from 'react-dom';
//import Card from "./components/Card";
//import Clock from "./components/Clock";
import Json from "./components/Json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  async componentDidMount() {
    try{
      const res = await fetch('http://localhost:3000/api/users/get/');
      const data = await res.json();
      console.warn(data);
      this.setState({ data });
    }catch(err){
      console.error(err);
    }
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <h1>Hola {this.state.data.user}!</h1>
        <Json />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

