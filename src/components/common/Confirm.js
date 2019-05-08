import React from 'react';
import {Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = (props) => {
    const { containerStyle, cardSectionStyle, textStyle } = styles;
    return(
        <Modal
        animationType = " slide "
        onRequestClose = { () => {} }
        transparent 
        visible = {props.visible}>
            <View style = {containerStyle}> 
                <CardSection style = {cardSectionStyle}>
                    <Text style = {textStyle}>
                        {props.children}
                    </Text>
                </CardSection>
                <CardSection>
                    <Button onPress = { props.onAccept } >
                        Yes
                    </Button>
                    <Button onPress = { props.onDecline }>
                        No
                    </Button>
                </CardSection>
            </View>
        </Modal>
        )
    
}
const styles = {
    cardSectionStyle : {
        justifyContent : 'center'
    },
    textStyle : {
        fontSize : 14,
        textAlign : 'center',
        lineHeight : 40
    },
    containerStyle : {
        backgroundColor: 'rgba(0, 0 , 0 , 0.75 )',
        // 0.75 for the opacity
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }

}

export { Confirm } ;