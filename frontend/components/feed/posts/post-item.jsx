import React from 'react';
import { Link } from 'react-router-dom';
import DatasetItem from '../../data/datasets_index/dataset_item';
import Chart from '../../charts/chart';

const postContentByType = (post, datasets, charts) => {
  switch (post.postable_type) {
    case 'Dataset':
      return <DatasetItem key={post.postable_id + post.postable_type} dataset={datasets[post.postable_id]} />;
    case 'Chart':
      return (<Link to={`/charts/${post.postable_id}`}>
        <Chart key={post.postable_id + post.postable_type} chart={charts[post.postable_id]} width={500} height={200} />
      </Link>);
    default:
      return <p> Problem </p>;
  }
};

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: this.props.liked,
      numLikes: this.props.numLikes,
    };
    this.toggleLike = this.toggleLike.bind(this);
  }

  toggleLike(event) {
    event.preventDefault();
    if (!this.state.liked) {
      this.props.likePost({post_id: this.props.post.id});
    } else {
      this.props.unlikePost({ post_id: this.props.post.id });
    }
    this.setState({
      liked: !this.state.liked,
      numLikes: this.state.liked ? this.state.numLikes - 1 : this.state.numLikes + 1,
    });
  }

  render() {
    const { post, datasets, charts, users } = this.props;
    const postContent = postContentByType(post, datasets, charts);
    return (
      <div className="post-item">
        <Link to={`/users/${post.author_id}`}>
          <img src={users[post.author_id].avatar_url} className="user-avatar" alt="user avatar" />
          <span className="username">{users[post.author_id].username}</span>
        </Link>
        <span className="date">{new Date(post.created_at).toDateString()}</span>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        {postContent}
        <button onClick={this.toggleLike} className="like-icon">
          {this.state.liked ? <i className="fa fa-heart" aria-hidden="true" /> : <i className="fa fa-heart-o" aria-hidden="true" />}
        </button>
        <span className="likes">{this.state.numLikes} likes</span>
      </div>
    );
  }
}

export default Post;
