import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts(); //to call action
  }

  // to use newPost will use another lifecycle method
  componentWillReceiveProps(nextProps) {
    //this will run when it receives new property from the state
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost); //'this.props.posts' is all of the items to which will add new post
    }
  }
  render() {
    const postItems = this.props.posts.map((post) => (
      <div key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object, // add new prop which is object
};
//get new items from the state.will get state from redux and map properties to the components
const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item, //state.posts is reducer & item is piece of state to be pulled
}); //first posts is property of component and 2nd post is postReducer

export default connect(mapStateToProps, { fetchPosts })(Posts); //'Posts' is component
