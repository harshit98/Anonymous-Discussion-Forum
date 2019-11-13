import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {


  render() {
    return <div>
      {this.props.post.user.name}
    </div>;
  }
}

console.log('hei');

export default Post;

Post.PropTypes = {
  post: PropTypes.object.isRequired,
  ldk: PropTypes.bool.isRequired
};



console.log(Post);
