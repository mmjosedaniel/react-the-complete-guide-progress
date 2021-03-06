import React, { Component } from "react";
// import axios from "axios";
import axios from "../../axios";

import Post from "../../components/Post/Post";
import "./Blog.css";

class Blog extends Component {
  state = {
    post: [],
    selectedPostId: null,
    error: false,
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then((response) => {
        const post = response.data.slice(0, 4);
        const updatedPost = post.map((post) => {
          return {
            ...post,
            author: "Daniel",
          };
        });
        this.setState({ post: updatedPost });
        // console.log(response);
      })
      .catch((error) => {
        // console.log(error);
        this.setState({ error: true });
      });
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Someting went wrong!</p>;
    if (!this.state.error) {
      post = this.state.post.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        );
      });
    }

    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="Posts">{post}</section>
      </div>
    );
  }
}

export default Blog;
