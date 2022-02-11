import { useState } from "react";
import Nav from "../../Components/Nav/Nav";

const UpdatePage = () => {
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

    return ( 
        <div className="cotainer p-5 pt-3">
            <Nav />
            <hr />
            <h1>UPDATE POST</h1>
            <br />
            <form >
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
                        onChange={handleChange('imgUrl ')} className="form-control" placeholder="IMG URL"  />
                </div>
                <button className="btn btn-primary">
                    Create Post
                </button>
            </form>
        </div>
     );
}
 
export default UpdatePage;