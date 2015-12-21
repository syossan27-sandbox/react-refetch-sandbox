import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect, PromiseState } from 'react-refetch'

export default class Test extends Component {
  render() {
    return (
      <div>
        <p>test</p>
        <Profile />
      </div>
    );
  }
}

export default class Profile extends Component {
  render() {
    // TODO
  }
}

Profile.defaultProps = {userFetch: 'hoge'}

connect((props) => ({
  userFetch: { url: '/users', refreshing: true }
}))(Profile)

ReactDOM.render(
  <Test />,
  document.getElementById('content')
)
