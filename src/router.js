import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux'; 
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/employeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = ()=>{
    return(
        <Router>
            <Scene key = "Root" hideNavBar>
                <Scene key = "auth">
                    <Scene key = "Login" component = {LoginForm} title = "Please Login" initial />
                </Scene>
                <Scene key = "main">
                    <Scene 
                    rightTitle = "ADD"
                    onRight = {() => Actions.employeeCreate() }
                    key = "employeeList" 
                    component = {EmployeeList} 
                    title = "Employees" 
                    initial />
                    <Scene key = "employeeCreate" component = { EmployeeCreate } title = " Create Employee "/>
                    <Scene key = "employeeEdit" component = { EmployeeEdit } title = " Edit Employee " />
                </Scene>

            </Scene>
        </Router>
    )
}

export default RouterComponent;