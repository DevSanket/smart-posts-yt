import { getUser } from '../../important';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({title,content,slug,user,imgUrl,DeletePost}) => {
    return ( 
        <div  className="mycard">
            <img className="img" src={imgUrl} placeholder="img" />
            <h5 className="card-title">
            Title -  {title}
            </h5> 
            <p className="card-text">
                {content.substring(0,20)}...
            </p>
            <h5 className="card-author">
                Author - {user}
            </h5>
            <Link to={`/post/${slug}`} className="btn btn-see btn-primary">
                See details ....
            </Link>
            {
                getUser() ? 
                <div className="mt-2">
                        <Link
                            to={`update/${slug}`}
                            className="btn btn-sm btn-outline-warning m-1">Update</Link>
                <button onClick={() => DeletePost(slug)} className="btn btn-sm btn-outline-danger m-1">
                    Delete
                </button>
                    </div> :
                    <h6></h6>
            }
        </div>
     );
}
 
export default Card;