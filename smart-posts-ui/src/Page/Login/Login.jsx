import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "../../Components/Nav/Nav";
import { authenticate, getUser } from "../../important";
import { useNavigate } from "react-router-dom";



const Login = (props) => {
    let navigate = useNavigate();
    const [state, setState] = useState({
        name: '',
        password:''
    });

    const { name, password } = state;

    useEffect(() => {
        getUser() && props.history.push('/');
    })

    const handleChange = (name) => (event) => {
        return setState({...state,[name]:event.target.value})
    }

    const HandleSubmit = (e) => { 
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API}/login`, { name, password })
            .then(res => {
                authenticate(res, () => {
                    navigate(`/`);
                })
            })
            .catch(err => {
                alert(err.response.data.error);
        })
    }
    return ( 
        <div className="container p-5 pt-3">
            <Nav />
            <hr />
            <h1>Login</h1>
            <br />
            <form  onSubmit={HandleSubmit}>
                <div className="form-group mb-3"  >
                    <label className="form-label">
                        Username
                    </label>
                    <input type="text" value={name} onChange={handleChange('name')} className="form-control" placeholder="Username" required />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">
                       Password
                    </label>
                    <input type="password"
                    value={password} onChange={handleChange('password')}    className="form-control" placeholder="Password" required />
                </div>
                <button className="btn btn-primary" type="submit">
                    Login
                </button>
            </form>
        </div>
     );
}
 
export default Login;