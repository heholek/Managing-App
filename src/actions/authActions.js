import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (email) => {
    return {
      type: EMAIL_CHANGED,
      payload: email
    };
};
export const passwordChanged = (password) => {
    return {
      type: PASSWORD_CHANGED,
      payload: password
    };
};
export const loginUser = (email, password) => {
    return (dispatch) => {
        dispatch({type: LOGIN_USER });
        firebase.auth().signInWithEmailAndPassword(email, password)
                .then(user =>{ LOGIN_USER_SUCCESSFUL(user, dispatch) })
                .catch(()=>{
                    firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user =>{ LOGIN_USER_SUCCESSFUL(user, dispatch)})
                    .catch(() =>{ dispatch({type: LOGIN_USER_FAIL})
                    })            
        })
    }
}

const LOGIN_USER_SUCCESSFUL = (user, dispatch) => {
    dispatch({type: LOGIN_USER_SUCCESS, payload: user});
    Actions.main();
}