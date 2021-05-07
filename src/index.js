import React from 'react';
import ReactDOM from 'react-dom';
import Json from "./components/Json";
import Login from './components/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  async componentDidMount() {
    
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

