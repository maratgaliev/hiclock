import api, { setHeaders } from '../config/api';
import { rememberToken, getDecodedToken, getValidToken } from './token';

function extractToken(res) {
    return res.headers.authorization.split(' ')[1]
}

export function signIn(data) {
    setHeaders(getValidToken())
    return api.post('/users/sign_in', data)
        .then((res) => {
            rememberToken(extractToken(res))
            window.location.reload()
            return getDecodedToken()
        })
        .catch((error) => {
            alert('The email/password combination was incorrect')
        })
}

export function signUp(data) {
    setHeaders(getValidToken())
    return api.post('/users/sign_up', data)
        .then((res) => {
            rememberToken(extractToken(res))
            return getDecodedToken()
        })
        .catch((error) => {
            alert('Please check your entered data')
        })
}

export function signOut() {
    setHeaders(getValidToken())
    api.delete('/users/sign_out')
        .then((res) => {
            rememberToken(null)
            window.location.reload();
        })
}