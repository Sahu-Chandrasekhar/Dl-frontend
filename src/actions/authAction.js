import Api from '../config/index';

export const signUp = (userData, navigate) => {
    return async (dispatch) => {
        try {
            const fetchData = await Api.post(`signup`, userData);
            console.log(fetchData?.data);

            if (fetchData?.data.status === 201) {
                // const { token, user } = fetchData?.data
                navigate('/login');
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: 'success',
                        message: fetchData?.data.message
                    }
                });
            } else {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: 'error',
                        message: 'Signup Error'
                    }
                });
            }
        } catch (error) {
            console.error('Login Error', error);
            dispatch({
                type: 'ADD_API_ALERT',
                payload: {
                    severity: 'error',
                    message: 'Signup server error......'
                }
            });
        }
    }
}


export const userLogin = (userData, navigate) => {
    return async (dispatch) => {
        try {
            const fetchData = await Api.post(`login`, userData);
            console.log(fetchData?.data);

            if (fetchData?.data.status === 200) {
                const { message, token, user } = fetchData?.data
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('loginTimestamp', Date.now());
                navigate('/home');
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: 'success',
                        message: message
                    }
                });
            } else {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: 'error',
                        message: 'login Error'
                    }
                });
            }
        } catch (error) {
            console.error('Login Error', error);
            dispatch({
                type: 'ADD_API_ALERT',
                payload: {
                    severity: 'error',
                    message: 'login Server Error......'
                }
            });
        }
    }
}

export const userLogout = (userData, navigate) => {
    return async (dispatch) => {
        try {
            // Assuming you are sending a request to invalidate the token on the server
            const fetchData = await Api.post(`logout`, userData); // Change 'logout' to your logout endpoint

            if (fetchData?.data.status) {
                // Assuming the server responds with a success status
                localStorage.getItem('token'); // Remove the token from localStorage
                // localStorage.removeItem('loginTimestamp'); // Remove any other relevant data

                // Redirect the user to the login page
                navigate('/login');

                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: 'success',
                        message: 'Logout successful' // Change to your success message
                    }
                });
            } else {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: 'error',
                        message: 'Logout Error'
                    }
                });
            }
        } catch (error) {
            console.error('Logout Error', error);
            dispatch({
                type: 'ADD_API_ALERT',
                payload: {
                    severity: 'error',
                    message: 'Server Error. Please try again.' // Change to your server error message
                }
            });
        }
    };
};
