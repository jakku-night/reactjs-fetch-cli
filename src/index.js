import React from 'react';
import ReactDOM from 'react-dom';
//import Card from "./components/Card";
//import Clock from "./components/Clock";
import Json from "./components/Json";

/*
function tick() {
    const element = (
        <div>
            <Card user="Santiago"/>
            <Clock/>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  async componentDidMount() {
    try{
      const res = await fetch('http://localhost:3000/api/test/');
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
        <h1>Hello, world!</h1>
        <h2>{this.state.data.user}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

