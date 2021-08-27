import { Component } from 'react'
import Blog from './components/Blog'
import './App.css';

class App extends Component {

  state = {
    blogs: []
  }

  componentDidMount = async () => {
    let response = await fetch("https://bcp-django-react.herokuapp.com/api/blogposts/")
    let JSONresp = await response.json()
    console.log(JSONresp)
    this.setState({
      blogs: JSONresp
    })
  }

  createBlogs = () => {
    return this.state.blogs.map((blog) => <Blog blog={blog}/>)
  }

  render() {
  return (
    <div className="App">
      <h1>Blogs</h1>
      {this.createBlogs()}
    </div>
  );
  }
}

export default App;
