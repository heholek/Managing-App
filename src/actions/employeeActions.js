import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH,
    EMPLOYEE_UPDATE_SAVE
} from './types';


import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';


export const employeeUpdate = ( {prop, value} ) => {
    return{
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    }
}


export const employeeCreate = ( { name, phone, shift } ) =>{
    console.log(name, phone, shift);
    const { currentUser } = firebase.auth();
    return((dispatch)=>{
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
        .then(()=>{
        dispatch({type: EMPLOYEE_CREATE}) 
        Actions.pop()    //or use .then(()=> Actions.employeeList({ type: 'reset' }))
        });
    });
};

// export const employeesfetch = () => { 
//     const { currentUser } = firebase.auth();
//     return(dispatch) => {
//         firebase.database().ref(`/users/${currentUser.uid}/employees`)
//         .on('value', snapshot => {
//             dispatch({type: EMPLOYEES_FETCH, payload: snapshot.val()})
//         })
//     }
// }

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();
  
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEES_FETCH, payload: snapshot.val() });
        });
    };
};


export const employeeUpdateAndSave = ( { name, phone, shift, uid } ) => {

        const { currentUser } = firebase.auth();

        return (dispatch) => {
          firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)  
          .set({name, phone, shift})
          .then(()=> {
              dispatch({type: EMPLOYEE_UPDATE_SAVE })
              Actions.employeeList();
          });
        };
};


export const employeeDelete = ( { uid } ) => {
    const { currentUser } = firebase.auth();
    return(dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(()=>{
            Actions.employeeList( { reset: true } );
        })
    }

};