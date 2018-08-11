import React, {Component} from 'react';
import {connect} from 'react-redux';

class Barca extends Component{
  renderList(){
    return this.props.players.map((player) => {
      return(
        <li>{player.name}</li>
      );
    });
  }
  render(){
    console.log(this.props.players);
    return(
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    players: state
   };
};


export default connect(mapStateToProps)(Barca);
