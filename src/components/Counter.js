import React, { Component } from 'react';
import { connect } from 'react-redux';

import barca_logo from '../barca.png';
import real_logo from '../real.png';

class Counter extends Component {
  constructor(props){
    super(props);

    this.state = {
      barca_logo_height: 200,
      real_logo_height: 200
    }

  }

  render() {
    const { counterBarca, counterReal, onIncrementBarca, onIncrementReal } = this.props;

    const incClickBarca = () => {
      onIncrementBarca();
      increaseSizeBarca();
    };
    const incClickReal = () => {
      onIncrementReal();
      increaseSizeReal();
    };

    const increaseSizeBarca = () => {
      if (counterBarca < 30) {
        this.setState({
          barca_logo_height: this.state.barca_logo_height + (this.state.barca_logo_height/50),
          real_logo_height: this.state.real_logo_height - (this.state.real_logo_height/50)
        });
      }
    }

    const increaseSizeReal = () => {
      if (counterReal < 30) {
        this.setState({
          real_logo_height: this.state.real_logo_height + (this.state.real_logo_height/50),
          barca_logo_height: this.state.barca_logo_height - (this.state.barca_logo_height/50)
        });
      }
    }
    return (
      <div className="container">
          <div className="row table-row">
          <div className="table-col col-md-5 col-sm-4">
            <img title="click me" className="teamLogo" height={this.state.barca_logo_height} src={barca_logo} onClick={() => incClickBarca()} alt="team"/>
          </div>
          <div className="table-col col-md-2 col-sm-4">
            <div className="scoreTable">
              <span>{counterBarca}</span>
              <span> : </span>
              <span>{counterReal}</span>
            </div>
          </div>
          <div className="table-col col-md-5 col-sm-4">
            <img title="click me" className="teamLogo" height={this.state.real_logo_height} src={real_logo} onClick={() => incClickReal()} alt="team"/>
          </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state.reducerCounter.counterBarca);
  return {
    counterBarca: state.reducerCounter.counterBarca,
    counterReal: state.reducerCounter.counterReal,
   };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementBarca: () => dispatch({ type: 'INCREMENT_BARCA' }),
    onIncrementReal: () => dispatch({ type: 'INCREMENT_REAL' })
  }
};

Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
