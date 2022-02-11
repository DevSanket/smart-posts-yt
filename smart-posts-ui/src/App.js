import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Nav from './Components/Nav/Nav';
import axios from 'axios';
import { getToken } from './important';

function App() {
  const [posts, setPost] = useState([]);



  const fetchPosts = () => {
    axios.get(`${process.env.REACT_APP_API}/post`)
      .then(res => {
        setPost(res.data);
      })
      .catch(err => {
        alert("Error fetching Post");
      });
  }


  useEffect(() => {
    fetchPosts();
  }, []);

  const DeletePost = (slug) => {
    let ans = window.confirm("Are You Shure For Delete Operation?");
    if (ans) {
      axios.delete(`${process.env.REACT_APP_API}/post/${slug}`, {
        headers: {
          authorization : `Bearer ${getToken()}`
        }
      })
        .then(res => {
          alert("Post Deleted");
          fetchPosts();
        })
        .catch(err => {
        // console.log(err);
          alert(err.response.data.error);
      })
    }
  }

  return (
    <div className="MainPage holder container pb-5 pt-3">
      <Nav />
      <hr />
      <h1>Latest Post</h1>
      <br />
      <div className='homepage'>
        <div className="cards-container">
          {
            posts.map((post) => {
                return <Card title={post.title} key={post._id} content={post.content} slug={post.slug}  user={post.user} imgUrl={post.imgUrl} DeletePost={DeletePost} /> 
            } )
          }
          </div>
      </div>
    </div>
  );
}

export default App;
