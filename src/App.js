import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducer'
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase';
import Router from './router';


class App extends Component{
    componentWillMount(){
    var firebaseConfig = {
        apiKey: "AIzaSyAUHb_lNzJbUSAGZRd15p9av_nzicICgzY",
        authDomain: "manager-f724b.firebaseapp.com",
        databaseURL: "https://manager-f724b.firebaseio.com",
        projectId: "manager-f724b",
        storageBucket: "manager-f724b.appspot.com",
        messagingSenderId: "1008809498969",
        appId: "1:1008809498969:web:61d89fd5f7892dc6"
        };
        firebase.initializeApp(firebaseConfig);
    }
    render(){
        return(
            <Provider store = {createStore(reducers, {}, applyMiddleware(ReduxThunk))}>  
            {/* storeenhancer (applyMiddleware)*/}
                <Router />
            </Provider>
        )
    }
}
export default App;