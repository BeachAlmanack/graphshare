import { values } from 'lodash';

export const recentDatasets = (state, number, userId) => {

  if (!userId) {
    userId = state.session.currentUser.id;
  }

  const { datasets } = state.entities;
  let datasetIds = Object.keys(datasets).filter(id => datasets[id].author_id === userId);

  if (number) {
    datasetIds = datasetIds.slice(0, number);
  }
  
  datasetIds.sort((a,b) => {
    const dateA = new Date(datasets[a].created_at);
    const dateB = new Date(datasets[b].created_at);
    if (dateA < dateB) return 1;
    if (dateA > dateB) return -1;
    return 0;
  });

  return datasetIds.map(id => datasets[id]);
};


export const recentCharts = (state, number, userId) => {
  if (!userId) {
    userId = state.session.currentUser.id;
  }
  const { charts } = state.entities;
  let chartIds = Object.keys(charts).filter(id => charts[id].author_id === userId);

  if (number) {
    chartIds = chartIds.slice(0, number);
  }

  chartIds.sort((a, b) => {
    const dateA = new Date(charts[a].created_at);
    const dateB = new Date(charts[b].created_at);
    if (dateA < dateB) return 1;
    if (dateA > dateB) return -1;
    return 0;
  });
  return chartIds.map(id => charts[id]);
};

export const latestPosts = (state) => {
  const { posts } = state.entities;
  const postIds = Object.keys(posts);

  postIds.sort((a, b) => {
    const dateA = new Date(posts[a].created_at);
    const dateB = new Date(posts[b].created_at);
    if (dateA < dateB) return 1;
    if (dateA > dateB) return -1;
    return 0;
  });

  return postIds.map(id => posts[id]);
};

export const likedPosts = (state) => {
  const { posts } = state.entities;
  const currentUser = state.session.currentUser.id;
  const postsValues = values(posts);
  const likedPostIds = {};
  postsValues.forEach((post) => {
    likedPostIds[post.id] = post.liking_user_ids.includes(currentUser);
  });
  return likedPostIds;
};

export const numLikesPosts = (state) => {
  const { likes } = state.entities;
  const likesValues = values(likes);
  const likedPostIds = {};
  likesValues.forEach((like) => {
    likedPostIds[like.post_id] = likedPostIds[like.post_id] ? (likedPostIds[like.post_id] + 1) : 1;
  });
  return likedPostIds;
};

export const topContributors = (state) => {
  const { users } = state.entities;
  const topUsers = values(users).filter(user => user.top_rank !== undefined);
  return topUsers.sort((a, b) => {
    if (a.top_rank < b.top_rank) return -1;
    if (a.top_rank > b.top_rank) return 1;
    return 0;
  });
};
