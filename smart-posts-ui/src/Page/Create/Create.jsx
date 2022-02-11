import { useState } from "react";
import Nav from "../../Components/Nav/Nav";
import axios from 'axios';
import { getToken } from "../../important";


const CreatePage = () => {
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

    const HandleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${process.env.REACT_APP_API}/post`, { title, content, user, imgUrl }, {
            headers: {
                authorization: `Bearer ${getToken()}`
            }
        })
            .then(res => {
                console.log(res);
                setState({ title: '', content: '', imgUrl: '', user: '', ...state });

                alert('Post Created Successfully');
            })
            .catch(err => console.log(err));
    }

    return ( 
        <div className="cotainer p-5 pt-3">
            <Nav />
            <hr />
            <h1>CREATE POST</h1>
            <br />
            <form onSubmit={HandleSubmit}>
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
 
export default CreatePage;