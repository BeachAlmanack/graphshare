import React from 'react';
import LeftMenu from './left_menu/left_menu';
import RightMenu from './right_menu/top_contributors_container';
import PostsContainer from './posts/posts_container';

export default function Feed() {
  return (
    <div>
      <div className="feed">
        <LeftMenu />
        <PostsContainer />
        <RightMenu />
      </div>
    </div>
  );
}
