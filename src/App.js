import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './layout/header1/Header';
import Top from './layout/top/Top';
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Top /> 
        </div>        
      </Provider>
    );
  }
}

export default App;
