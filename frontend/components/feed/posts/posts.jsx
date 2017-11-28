import React from 'react';
import PropTypes from 'prop-types';
import { values } from 'lodash';
import Post from './post-item';

class Posts extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { charts, datasets, posts } = this.props;
    const postsArr = values(posts);

    return (
      <div className="feed-items">
        { postsArr.map(post => (
          <Post key={post.id} post={post} datasets={datasets} charts={charts} />
          ))
        }
      </div>
    );
  }
}

export default Posts;
