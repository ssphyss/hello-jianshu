import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './layout/header1/Header';
import Top from './layout/top/Top';
import TopState from './layout/topState/TopState';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>          
          <BrowserRouter>
            <div>
              <Header />
              {/* <Route path='/' exact render={ () => <div>home</div> }></Route>   
              <Route path='/detail' exact render={ () => <div>detail</div> }></Route> */}
              <Route path='/' exact component={Home}></Route>   
              <Route path='/detail/:id' exact  component={Detail}></Route>
            </div>            
          </BrowserRouter>
          <TopState />
          <Top />
		      <BrowserRouter>
              <div>
                {/* <Route path='/' exact render={ () => <div>home</div> }></Route>   
                <Route path='/detail' exact render={ () => <div>detail</div> }></Route> */}
                <Route path='/' exact component={Home}></Route>   
                <Route path='/detail' exact  component={Detail}></Route>
              </div>            
          </BrowserRouter>
        </div>        
      </Provider>
    );
  }
}

export default App;
