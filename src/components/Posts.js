import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts(); //to call action
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
};
//get new items from the state.will get state from redux and map properties to the components
const mapStateToProps = (state) => ({ posts: state.posts.items }); //first posts is property of component and 2nd post is postReducer
export default connect(mapStateToProps, { fetchPosts })(Posts); //'Posts' is component
