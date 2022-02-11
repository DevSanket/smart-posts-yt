// import React from 'react';
import { BrowserRouter,Routes, Route,Navigate} from 'react-router-dom';
import App from './App';
import { getUser } from './important';
import CreatePage from './Page/Create/Create';
import Login from './Page/Login/Login';
import SinglePostPage from './Page/SinglePostPage/SinglePostPage';
import UpdatePage from './Page/Update/Update';
const Router = () => {
    return (
        <BrowserRouter>
        
            <Routes>
                <Route path="/" element={<App />} />
                {
                    getUser() ? <Route path="/create" element={<CreatePage />} /> : <Route path='/create' element={<Navigate to="/" />} />
                
                }
                {
                    getUser() ? <Route path="/update/:slug" element={<UpdatePage />} /> : <Route path='/update/:slug' element={<Navigate to="/" />} />
                
                }
                <Route path="/post/:slug" element={<SinglePostPage />} />
                <Route path="/login" element={<Login />} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router;