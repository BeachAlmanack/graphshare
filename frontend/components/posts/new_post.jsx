import React from 'react';
import Chart from '../charts/chart';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (<div className="new-post">
      <h2>New Post</h2>
      <form className="form">
        <label htmlFor="title"> Post title:
          <input id="title" type="text" placeholder="title"/>
        </label>
        <label htmlFor="description"> Description:
          <textarea name="" id="description" cols="30" rows="5"></textarea>
        </label>
        <div className="save">
          <button className="button-green"> Save </button>
        </div>
        <label>Preview: </label>
        { children }
      </form>
    </div>);
  }
}

export default NewPost;
