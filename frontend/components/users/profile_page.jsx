import React from 'react';
import PropTypes from 'prop-types';
import DatasetIndexContainer from '../data/datasets_index/datasets_index_container';

class ProfilePage extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.userId !== newProps.userId) {
      this.props.fetchUser(newProps.userId);
    }
  }

  render() {
    const user = this.props.user;
    if (user) {
      return (
        <div className="page">
          <h1>{ user.username }</h1>
          <h1>{ user.email }</h1>
          <hr />
          <DatasetIndexContainer userId={user.id} />
        </div>
      );
    }
    return (<div />);
  }
}

export default ProfilePage;
