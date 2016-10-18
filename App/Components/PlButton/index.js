import React from 'react';
import Button from 'apsl-react-native-button'
import styles from './PlButton.style';

const getStyle = (type) => {
    switch(type) {
        case 'success' : return styles.btnSuccess
    }
    return {};
}

export default(props) => {
    const btnStyle = getStyle(props.type);

    return (
        <Button onPress={props.onPress}
                style={ btnStyle.button } 
                textStyle={btnStyle.text}>
            {props.children}
        </Button>
    )
}