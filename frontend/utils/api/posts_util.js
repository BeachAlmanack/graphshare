
export const getPosts =  () => (
  $.ajax({
    url: `/api/posts`,
    method: 'GET',
  })
);
