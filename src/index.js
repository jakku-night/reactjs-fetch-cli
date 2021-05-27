import React from 'react';
import ReactDOM from 'react-dom';
import FileUploader from './components/FileUploader';
import Navigator from './components/Navigator';

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
        
        <FileUploader />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

