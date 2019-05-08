import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions';
import { connect } from 'react-redux';
class EmployeeForm extends Component {
    render(){
        return(
            <View>
                <CardSection>
                    <Input 
                        label = "Name"
                        placeholder = "James"  
                        value = {this.props.name}
                        onChangeText = { text => this.props.employeeUpdate({prop: 'name', value: text}) }
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label = "Phone"
                        placeholder = "7838775274" 
                        value = {this.props.phone}
                        onChangeText = { text => this.props.employeeUpdate({prop: 'phone', value: text}) } 
                    />   
                </CardSection>

                <CardSection>
                    <Text>Shift</Text>
                        <Picker
                            selectedValue = {this.props.shift}
                            onValueChange = { day  => this.props.employeeUpdate({prop: 'shift', value: day})}>
                            <Picker.Item label = "Monday" value = "Monday" />
                            <Picker.Item label = "Tuesday" value = "Tuesday" />
                            <Picker.Item label = "Wednesday" value = "Wednesday" />
                            <Picker.Item label = "Thursday" value = "Thursday" />
                            <Picker.Item label = "Friday" value = "Friday" />
                            <Picker.Item label = "Saturday" value = "Saturday" />
                            <Picker.Item label = "Sunday" value = "Sunday" />
                        </Picker>
                </CardSection>
            </View>
        )
   }
}

const mapStateToProps = (state) => {
const { name, phone, shift } = state.employeeFormReducer;
    return { name, phone, shift };
};




export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);