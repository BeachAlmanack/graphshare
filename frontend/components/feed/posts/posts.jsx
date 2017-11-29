import React from 'react';
import PropTypes from 'prop-types';
import Post from './post-item';

class Posts extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { charts, datasets, posts, users } = this.props;

    return (
      <div className="feed-items">
        { posts.map(post => (
          <Post key={post.id} post={post} datasets={datasets} charts={charts} users={users} />
          ))
        }
      </div>
    );
  }
}

export default Posts;
