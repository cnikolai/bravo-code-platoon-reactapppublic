import { Component } from 'react'

class Blog extends Component {
  render() {
  return (
    <div>
      <h1>Blog</h1>
      <h3>{JSON.stringify(this.props.blog)}</h3>
      <h3>{this.props.blog.id}</h3>
      <h3>{this.props.blog.post}</h3>
    </div>
  );
  }
}

export default Blog;