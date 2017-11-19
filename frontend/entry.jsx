import React from 'react';
import ReactDOM from 'react-dom';
import { postSession, postUser, deleteSession } from './utils/api/users_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<div> Hello World </div>, root);
});

window.postSession = postSession;
window.deleteSession = deleteSession;
