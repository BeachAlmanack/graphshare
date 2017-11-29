
export const getPosts = () => (
  $.ajax({
    url: '/api/posts',
    method: 'GET',
  })
);

export const postPost = post => (
  $.ajax({
    url: '/api/posts',
    method: 'POST',
    data: { post },
  })
);
