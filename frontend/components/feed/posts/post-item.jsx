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
        <Chart key={post.postable_id + post.postable_type} chart={charts[post.postable_id]} width={530} height={200} />
      </Link>);
    default:
      return <p> Problem </p>;
  }
};

export default function ({post, datasets, charts}) {
  const postContent = postContentByType(post, datasets, charts);

  return (
    <div className="post-item">
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      {postContent}
    </div>
  );
}
