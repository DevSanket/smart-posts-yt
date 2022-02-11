
//save login info

const authenticate = (res, next) => {
    if (window !== 'undefined') {
        sessionStorage.setItem('token', JSON.stringify(res.data.token));
        sessionStorage.setItem('name', JSON.stringify(res.data.name));
        console.log('data saved');
    }
    next();
}

//access user info from session storage

const getToken = () => {
    if (window !== 'undefined') {
        if (sessionStorage.getItem('token')) {
            return JSON.parse(sessionStorage.getItem('token'));
        } else {
            return false;
        }
    }
}

//use token for getting user

const getUser = () => {
    if (window !== 'undefined') {
        if (sessionStorage.getItem('token')) {
            return JSON.parse(sessionStorage.getItem('token'));
        } else {
            return false;
        }
    }
}

//log out
const logOut = (next) => {
    if (window !== 'undefined') {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
    }
    next();
}


module.exports = {
    authenticate,
    getToken,
    getUser,
    logOut
}