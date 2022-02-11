import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "../../Components/Nav/Nav";
import { useParams } from "react-router-dom";
import { getToken } from "../../important";

const UpdatePage = () => {
    let { slug } = useParams();
    const [state, setState] = useState({
        title: '',
        content: '',
        user: '',
        imgUrl: ''
    });

    const { title, content, imgUrl, user } = state;
    
    const handleChange = (name) => (event) => {
        return setState({...state,[name]:event.target.value})
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/post/${slug}`)
        .then(res => {
            const { title, content, user, imgUrl } = res.data;
            setState({ ...state, title, content, user, imgUrl });
        })
        .catch(err => {
            alert("Error While getting update post");
        });
    
    },[])

    const HandleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${process.env.REACT_APP_API}/post/${slug}`, { title, content, user, imgUrl }, {
            headers: {
                authorization: `Bearer ${getToken()}`
            }
        })
            .then(res => {
                alert('Post Updated');
            })
            .catch(err => {
                console.log('====================================');
                console.log(err);
                console.log('====================================');
                alert("Error while post updated")
            });
        
        }

    return ( 
        <div className="cotainer p-5 pt-3">
            <Nav />
            <hr />
            <h1>UPDATE POST</h1>
            <br />
            <form onSubmit={HandleSubmit} >
                <div className="form-group mb-3">
                    <label className="form-label">
                        Title
                    </label>
                    <input type="text" value={title}
                        onChange={handleChange('title')} className="form-control" placeholder="Post Title" required />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">
                        Content
                    </label>
                    <textarea type="text" value={content}
                        onChange={handleChange('content')} className="form-control" placeholder="Write Something" required ></textarea>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">
                        Author
                    </label>
                    <input type="text" value={user}
                        onChange={handleChange('user')} className="form-control" placeholder="Author Name" required />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">
                        Img URL
                    </label>
                    <input type="text" value={imgUrl}
                        onChange={handleChange('imgUrl')} className="form-control" placeholder="IMG URL"  />
                </div>
                <button type="submit" className="btn btn-primary">
                    Create Post
                </button>
            </form>
        </div>
     );
}
 
export default UpdatePage;