import React from 'react';
import { Link } from 'react-router-dom';

const TopContributorItem = ({ user }) => {
  return (
    <Link to={`/users/${user.id}`}>
    <li>
      <img src={user.avatar_url} className="user-avatar" alt="user avatar" />
      <p className="username">{user.username}</p>
      <p className="top-count">
        <i className="fa fa-pencil-square-o" aria-hidden="true" />
        {user.post_count || 0} Post{user.post_count > 1 ? 's' : ''} | <i className="fa fa-heart" aria-hidden="true" />
        {user.like_count || 0} Like{user.like_count > 1 ? 's' : ''}
      </p>
    </li>
    </Link>
  );
};

export default TopContributorItem;
