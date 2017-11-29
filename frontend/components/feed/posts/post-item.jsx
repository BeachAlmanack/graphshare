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

export default function ({post, datasets, charts, users}) {
  const postContent = postContentByType(post, datasets, charts);
  console.log(users);
  return (
    <div className="post-item">
      <h2><Link to={`/users/${post.author_id}`}>{users[post.author_id].username}</Link></h2>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      {postContent}
      <i className="fa fa-heart-o" aria-hidden="true" />  <span className="likes">30 likes</span>
    </div>
  );
}
