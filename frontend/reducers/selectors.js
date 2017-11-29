export const myRecentDatasets = (state, number) => {
  const { datasets } = state.entities;
  const datasetIds = Object.keys(datasets).filter(id => datasets[id].author_id === state.session.currentUser.id).slice(0, number);
  
  datasetIds.sort((a,b) => {
    const dateA = new Date(datasets[a].created_at);
    const dateB = new Date(datasets[b].created_at);
    if (dateA < dateB) return 1;
    if (dateA > dateB) return -1;
    return 0;
  });
  return datasetIds.map(id => datasets[id]);
};


export const myRecentCharts = (state, number) => {
  const { charts } = state.entities;
  const chartIds = Object.keys(charts).filter(id => charts[id].author_id === state.session.currentUser.id).slice(0, number);

  chartIds.sort((a, b) => {
    const dateA = new Date(charts[a].created_at);
    const dateB = new Date(charts[b].created_at);
    if (dateA < dateB) return 1;
    if (dateA > dateB) return -1;
    return 0;
  });
  return chartIds.map(id => charts[id]);
};
