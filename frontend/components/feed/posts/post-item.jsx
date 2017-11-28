import React from 'react';
import DatasetItem from '../../data/datasets_index/dataset_item';
import Chart from '../../charts/chart';

const postContentByType = (post, datasets, charts) => {
  switch (post.postable_type) {
    case 'Dataset':
      return <DatasetItem key={post.postable_id + post.postable_type} dataset={datasets[post.postable_id]} />;
    case 'Chart':
      return <Chart key={post.postable_id + post.postable_type} chart={charts[post.postable_id]} width={300} height={200} />;
    default:
      return <p> Problem </p>;
  }
};

export default function ({post, datasets, charts}) {
  const postContent = postContentByType(post, datasets, charts);

  return (
    <div className="post-item">
      {post.title} <br />
      {post.description}
      {postContent}
    </div>
  );
}
