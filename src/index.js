import React from 'react';
import ReactDOM from 'react-dom';
import user from './user'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  /**
   * Declare a context with:
   *  const <context_name> React.createContext(<default_value>);
   * 
   * Set the provider with:
   *    <context_name.Provider value={<value>}>
   *        <children_components>
   *    <context_name.Provider />
   * 
   * Use the data with:
   *    static contextType = <context_name>;
   *    this.context; // This is the entrie object <context_name>
   */

  render() {
    return (
      <div>
        <user.Provider value={}>
          
        </user.Provider>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

