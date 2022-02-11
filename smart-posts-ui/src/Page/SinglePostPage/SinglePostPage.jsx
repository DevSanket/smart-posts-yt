import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "../../Components/Nav/Nav";
import './SinglePostPage.css';
import { useParams } from "react-router-dom";

const SinglePostPage = (props) => {
    let { slug } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        
        axios.get(`${process.env.REACT_APP_API}/post/${slug}`)
            .then(res => setPost(res.data))
            .catch(err => alert("Error Loading Single Post"))
    },[]);
    return ( 
        <div className="container pb-5 pt-5">
            <Nav />
            <hr />
            <div className="Single-card">
                <div className="card-title">
                    {post.title}
                </div>
                <img src={post.imgUrl} className="img" />
                <p className="card-text">
                    {post.content}
                </p>
                <p className="card-text">
                    Created At - {new Date(post.createdAt).toLocaleString()}
                </p>
            </div>
        </div>
     );
}
 
export default SinglePostPage;