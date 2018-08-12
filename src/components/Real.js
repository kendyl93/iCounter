import React, {Component} from 'react';
import {connect} from 'react-redux';

class Real extends Component{
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
                Real Madrit
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
    players: state.reducerReal
   };
};


export default connect(mapStateToProps)(Real);
