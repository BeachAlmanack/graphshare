import React from 'react';
import TopContributorItem from './top_contributor_item';

class TopContributors extends React.Component {
  componentDidMount() {
    this.props.fetchTopContrib();
  }

  render() {
    const { users } = this.props;
    return (
      <div className="right-feed-menu">
        <h2>Top Contributors</h2>
        <ul>
          { users.map(user => <TopContributorItem key={user.id} user={user} />) }
        </ul>
      </div>
    );
  }
}

export default TopContributors;
