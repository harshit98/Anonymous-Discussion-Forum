/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {
  render() {
    return(
      <div>
        {this.props.post.user.name}
      </div>
    );
  }
}

export default Post;

Post.PropTypes = {
  post: PropTypes.object.isRequired,
  ldk: PropTypes.bool.isRequired
};

// eslint-disable-next-line no-console
console.log(Post);
