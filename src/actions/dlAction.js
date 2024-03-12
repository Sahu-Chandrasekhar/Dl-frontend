import Api from '../config/index';

export const addDocuments = (userData) => {
    return async (dispatch) => {
        try {
            const fetchData = await Api.post(`dl_user_insert`, userData);
            console.log(fetchData?.data);

            if (fetchData?.data.status === 201) {
                // const { token, user } = fetchData?.data
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: 'success',
                        message: fetchData?.data.message
                    }
                });
                dispatch(ReadDlUsers());
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
            console.error('Apply Error', error);
            dispatch({
                type: 'ADD_API_ALERT',
                payload: {
                    severity: 'error',
                    message: 'DL insert server error......'
                }
            });
        }
    }
}

export const ReadDlUsers = () => {
    return async (dispatch) => {
        try {
            const fetchData = await Api.get(`dl_user_view`);
            console.log(fetchData); // Check the fetched data
            if (fetchData?.data?.status === 201) {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: 'success',
                        message: fetchData?.data.message,
                    },
                });
                dispatch({
                    type: 'ADD_USER_DETAIL',
                    payload: fetchData?.data.data
                });
            } else {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: 'error',
                        message: 'Signup Error',
                    },
                });
            }

            // Return the fetched data
            // This assumes the data you need is directly under fetchData.data
        } catch (error) {
            console.error('Apply Error', error);
            dispatch({
                type: 'ADD_API_ALERT',
                payload: {
                    severity: 'error',
                    message: 'DL insert server error......',
                },
            });
            throw error; // Rethrow the error to handle it in the component
        }
    };
};

export const vewDlByUnderScoreId = () => {
    return async (dispatch) => {
        try {
            const fetchData = await Api.get(`dl_user_view`);
            console.log(fetchData); // Check the fetched data
            if (fetchData?.data?.status === 201) {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: 'success',
                        message: fetchData?.data.message,
                    },
                });
                dispatch({
                    type: 'ADD_USER_DETAIL',
                    payload: fetchData?.data.data
                });
            } else {
                dispatch({
                    type: 'ADD_API_ALERT',
                    payload: {
                        severity: 'error',
                        message: 'Signup Error',
                    },
                });
            }

            // Return the fetched data
            // This assumes the data you need is directly under fetchData.data
        } catch (error) {
            console.error('Apply Error', error);
            dispatch({
                type: 'ADD_API_ALERT',
                payload: {
                    severity: 'error',
                    message: 'DL insert server error......',
                },
            });
            throw error; // Rethrow the error to handle it in the component
        }
    };
};
