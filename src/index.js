import React from 'react';
import ReactDOM from 'react-dom';
import FileUploader from './components/FileUploader';
import Login from './components/Login';

const user = React.createContext({
  id: '',
  token: ''
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <user.Provider value={{
          id: '',
          token: ''
        }}>
          <Login />
        </user.Provider>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

