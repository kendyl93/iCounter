import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducerCounter';

//components
import Counter from './components/Counter';
// import Barca from './components/Barca';


// CSS and the rest
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './pawel_stanecki.svg';
import react_logo from './logo.svg';
import redux_logo from './redux.svg';
import bootstrap_logo from './bootstrap-stack.png';

import './App.css';

const store = createStore(reducer, {
  counterBarca: 0,
  counterReal: 0
 });


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="App-main relative">
          <Provider store={store}>
          <div>
            <Counter />
          </div>
          </Provider>
        </main>

        <footer>
          <div className="container text-center">
            <p>
              iVideos was created only for an educational purposes. Application uses the YouTube API and it is written in <b>ReactJS</b> with <b>Bootstrap</b>.
            </p>
            <div>
            <img src={redux_logo} className="App-logo" alt="Redux" />
              <img src={react_logo} className="App-logo" alt="ReactJS" />
              <img src={bootstrap_logo} className="App-logo" alt="Bootstrap" />
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
