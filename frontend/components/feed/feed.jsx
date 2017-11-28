import React from 'react';
import LeftMenu from './left_menu/left_menu';
import PostsContainer from './posts/posts_container';

export default function Feed() {
  return (
    <div>
      <div className="feed">
        <LeftMenu />
        <PostsContainer />
        <div className="right-menu" />
      </div>
    </div>
  );
}
