import React, { Component } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.setState({ post: response.data });
      // console.log(response);
    });
  }
  render() {
    const post = this.state.post.map((post) => {
      return <Post key={post.id} title={post.title} />;
    });

    return (
      <div>
        <section className="Posts">{post}</section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
