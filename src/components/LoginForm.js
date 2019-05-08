import  React, { Component } from 'react';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { connect } from 'react-redux' ;
import { Text, View } from 'react-native';

class LoginForm extends Component{
    onChangedEmail(email){
     this.props.emailChanged(email);
    }

    onChangePassword(password){
        this.props.passwordChanged(password);
    }

    onButtonPress(){
        const { email, password } = this.props;
        this.props.loginUser( email, password);
    }

    renderError(){
        if(this.props.error){
            return(
                <View style = {{backgroundColor: 'white'}}>
                    <Text style = {styles.errorStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }
    renderButton(){
        if(this.props.loading){
            return (
                <Spinner />
            )
        }
        return(
        <Button onPress = {this.onButtonPress.bind(this)}>
            Login
        </Button>
        )
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                    label = "Email" 
                    placeholder = "email@gmail.com" 
                    onChangeText={this.onChangedEmail.bind(this)}
                    value={this.props.email}
                    />

                </CardSection>

                <CardSection>
                <Input 
                    secureTextEntry
                    label = "Password"
                    placeholder = "Password" 
                    onChangeText = {this.onChangePassword.bind(this) }
                    value = {this.props.password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const MapStateToProps = state => {
    return {
        email: state.AuthReducer.email,
        password : state.AuthReducer.password,
        error: state.AuthReducer.error,
        loading: state.AuthReducer.loading
    }
}

const styles = {
    errorStyle: {
        fontSize: 20, 
        alignSelf: 'center',
        color: 'red'
    }
}

export default connect(MapStateToProps, { emailChanged, passwordChanged, loginUser } )(LoginForm);