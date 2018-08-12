import React, {Component} from 'react';
import {connect} from 'react-redux';

class Barca extends Component{
  renderList(){
    return this.props.players.map((player) => {
      return(
        <tr key={player.name}>
          <td>{player.name}</td>
        </tr>
      );
    });
  }
  render(){
    console.log(this.props.players);
    return(
      <div className="col-sm-6 table-col table-responsive">
        <table className="table table-striped">
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
