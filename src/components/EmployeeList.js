import _ from 'lodash';
import React, { Component } from 'react';
import ListItem from './ListItem';
import { FlatList } from 'react-native'
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';


class EmployeeList extends Component {
    componentDidMount() {
    this.props.employeesFetch();
    }    
    render() {
        
        return (
        <FlatList
            data={this.props.employees}
            renderItem={({item}) => <ListItem employee= {item} />}
            keyExtractor={employee => employee.uid}
        />
        )
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employeeFetchReducer, (val, uid) => {
      return { ...val, uid };
    });
    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);


