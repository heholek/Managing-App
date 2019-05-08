import React, { Component } from 'react';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button, Confirm } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeUpdateAndSave, employeeDelete} from '../actions';
import _ from 'lodash'; 
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {
    state = {
        showModal: false
    }

    componentDidMount(){
        _.each(this.props.employee, (value, prop)=>{
            this.props.employeeUpdate({prop, value});
        });
    };

    onButtonPress(){
        const { name, phone, shift } = this.props;
        this.props.employeeUpdateAndSave( { name, phone, shift, uid: this.props.employee.uid } );
    };
    onTextPress(){
        const { phone, shift } = this.props;
        Communications.text(phone, 'fgjsfkgjsk')
    }
    onAccept(){
        const { uid } = this.props.employee;
        this.props.employeeDelete( { uid } );
        this.setState({showModal: false})
    };

    onDecline(){
        this.setState({showModal: false})
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <EmployeeForm />
                    <Button onPress = {this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress = {this.onTextPress.bind(this)}>
                        Text Shift
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress = {() => this.setState({ showModal: !this.state.showModal}) }>
                        Fire Employee
                    </Button>
                </CardSection>
                <Confirm
                visible = { this.state.showModal } 
                onAccept = { this.onAccept.bind(this) }
                onDecline = { this.onDecline.bind(this) }
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        )
    }

}

const mapStateToProps = (state) => {

    const { name, phone, shift } = state.employeeFormReducer;
    return { name, phone, shift }; 

}

export default connect(mapStateToProps, { employeeUpdate, employeeUpdateAndSave, employeeDelete })(EmployeeEdit);