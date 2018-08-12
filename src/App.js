import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

//components
import Counter from './components/Counter';
import Barca from './components/Barca';
import Real from './components/Real';


// CSS and the rest
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './pawel_stanecki.svg';
import react_logo from './logo.svg';
import redux_logo from './redux.svg';
import bootstrap_logo from './bootstrap-stack.png';

import './App.css';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="App-main relative">
        <img src={redux_logo} className="bg-img bg-redux" alt="redux" />
        <img src={react_logo} className="bg-img bg-react" alt="react" />
          <p>
          Simple Counter App. Click on the favourite team logo to set the final score(<i>App will be imporooved soon</i>).
          </p>
          <Provider store={store}>
          <div>
            <Counter />
            <div className="row table-row">
              <h2>Teams</h2>
              <Barca />
              <Real />
            </div>
          </div>
          </Provider>
        </main>

        <footer>
          <div className="container text-center">
            <p>
              iCounter was created only for an educational purposes. Application is written in <b>Redux</b>, <b>ReactJS</b> with <b>Bootstrap</b>.
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
