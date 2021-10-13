import http from './http-common'


export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" });

    try {
        const res = await http.post('users/login', userCredential);
        dispatch({
            type: "LOGIN_SUCCESS", payload: res.data

        });
    } catch (err) {
        dispatch({
            type: "LOGIN_FAILURE", payload: err
        });

    }
}