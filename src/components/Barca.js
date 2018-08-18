import React, {Component} from 'react';
import {connect} from 'react-redux';

class Barca extends Component{
  constructor(props){
    super(props);

    this.state = {
      //players: this.props.players <-- Stupid thing
      player: '' //empty to set as an input
    }
  }

  // add inputted letters to the local state
  onChange(e){
    this.setState({
      player: e.target.value
    });
  }


  renderList(){
    if (!this.state.player) {
      return this.props.players.map((player) => {
        return(
          <tr key={player.name}>
          <td>{player.name}</td>
          </tr>
        );
      });
    }else{
      return this.props.players.filter(player =>
        player.name.toLowerCase().includes(this.state.player.toLowerCase())).map(searchedPlayers => {
          return(
            <tr key={searchedPlayers.name}>
              <td>{searchedPlayers.name}</td>
            </tr>
          );
        })
    }
  }
  render(){
    return(
      <div className="col-sm-6 table-col table-responsive">
        <table className="table table-striped">
          <div className="input_wrapper">
            <input
            className="form-control"
            type="text"
            placeholder="Search for player..."
            value={this.state.player}
            onChange={this.onChange.bind(this)}
            />
          </div>
          <thead>
            <tr>
              <th className="text-center">
                FC Barcelona
              </th>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.reducerBarca
   };
};


export default connect(mapStateToProps)(Barca);
