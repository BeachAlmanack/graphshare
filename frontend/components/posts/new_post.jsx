import React from 'react';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      postable_type: this.props.contentType,
      postable_id: this.props.contentId,
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.saveNewPost = this.saveNewPost.bind(this);
  }

  handleUpdate(type) {
    return (event) => {
      this.setState({
        [type]: event.target.value,
      });
    };
  }

  saveNewPost() {
    this.props.savePost(this.state);
  }

  render() {
    const { children } = this.props;
    return (
      <div className="new-post">
        <h2>New Post</h2>
        <form className="form">
          <label htmlFor="title"> Post title:
            <input id="title" type="text" placeholder="title" value={this.state.title} onChange={this.handleUpdate('title')} />
          </label>
          <label htmlFor="description"> Description:
            <textarea name="" id="description" cols="30" rows="5" value={this.state.description} onChange={this.handleUpdate('description')} />
          </label>
          <div className="save">
            <button className="button-green" onClick={this.saveNewPost}> Save </button>
          </div>
          <label>Preview: </label>
          { children }
        </form>
      </div>
    );
  }
}

export default NewPost;
