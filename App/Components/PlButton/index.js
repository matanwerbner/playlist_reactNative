import React from 'react';
import Button from 'apsl-react-native-button'
import styles from './PlButton.style';

const getStyle = (type) => {
    switch (type) {
        case 'success':
            return styles.btnSuccess
    }
    return {};
}

export default({ 
    onPress, 
    btnStyle, 
    textStyle, 
    children, 
    type,
    disabled = false 
}) => {
    const btnStyleForType = getStyle(type);

    return (
        <Button
            disabledStyle={ styles.disabledStyle}
            isDisabled={ disabled }
            activeOpacity={ 0.5 }
            onPress={ disabled ? () => {} : onPress}
            style={ {...styles.button, ...btnStyle, ...btnStyleForType.button}}
            textStyle={{ ...styles.text, ...textStyle, ...btnStyleForType.text}}>
            {children}
        </Button>
    )
}