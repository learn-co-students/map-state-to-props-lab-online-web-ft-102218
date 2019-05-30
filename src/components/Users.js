import React, { Component } from 'react';
import {connect} from 'react-redux'

class Users extends Component {


  render() {
    return (
      <div>
        <ul>
          {this.props.users.map((user, key) =>  <li key={key}>{key+1}. {user.username}</li> )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateToProps)(Users);
