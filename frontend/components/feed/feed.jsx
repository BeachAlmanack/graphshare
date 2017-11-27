import React from 'react';
import LeftMenu from './left_menu/left_menu';
import ExampleChart from '../charts/chart';

export default function Feed() {
  return (
    <div>
      <div className="feed">
        <LeftMenu />
        <div className="feed-items">
        </div>
        <div className="right-menu" />
      </div>
    </div>
  );
}
