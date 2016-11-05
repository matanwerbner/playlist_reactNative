
import React, {
  PropTypes,
} from 'react';
import {
  Platform,
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { get } from 'lodash'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import styles from './Styles/NavBarStyles'

const propTypes = {
  navigationState: PropTypes.object,
  backButtonImage: Image.propTypes.source,
  wrapBy: PropTypes.any,
  component: PropTypes.any,
  backButtonTextStyle: Text.propTypes.style,
  leftButtonStyle: View.propTypes.style,
  leftButtonIconStyle: Image.propTypes.style,
  getTitle: PropTypes.func,
  titleStyle: Text.propTypes.style,
  titleOpacity: PropTypes.number,
  titleProps: PropTypes.any,
  position: PropTypes.object,
  navigationBarStyle: View.propTypes.style,
  renderTitle: PropTypes.any,
};

const contextTypes = {
  drawer: PropTypes.object,
};

const defaultProps = {
  titleOpacity: 1,
};

class NavBar extends React.Component {

  constructor(props) {
    super(props);

    this.renderRightButton = this.renderRightButton.bind(this);
    this.renderBackButton = this.renderBackButton.bind(this);
    this.renderLeftButton = this.renderLeftButton.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
  }

  renderBackButton() {
    const state = this.props.navigationState;
    const childState = state.children[state.index];
    const BackButton = (childState.component && childState.component.backButton) || state.backButton
      || childState.backButton;
    const textButtonStyle = [
      styles.barBackButtonText,
      this.props.backButtonTextStyle,
      state.backButtonTextStyle,
      childState.backButtonTextStyle,
    ];
    const style = [
      styles.backButton,
      this.props.leftButtonStyle,
      state.leftButtonStyle,
      childState.leftButtonStyle,
    ];

    if (state.index === 0) {
      return null;
    }

    if (BackButton) {
      return (
        <BackButton
          testID="backNavButton"
          textButtonStyle={textButtonStyle}
          {...childState}
          style={style}
        />
      );
    }
    let buttonImage = childState.backButtonImage ||
      state.backButtonImage || this.props.backButtonImage;
    let onPress = childState.onBack || childState.component.onBack;
    if (onPress) {
      onPress = onPress.bind(null, state);
    } else {
      onPress = Actions.pop;
    }

    let text = childState.backTitle ?
      <Text style={textButtonStyle}>
        {childState.backTitle}
      </Text>
      : null;

    return (
      <TouchableOpacity
        testID="backNavButton"
        style={style}
        onPress={onPress}
      >
        {buttonImage && !childState.hideBackImage &&
          <Image
            source={buttonImage}
            style={[
              styles.backButtonImage,
              this.props.leftButtonIconStyle,
              state.barButtonIconStyle,
              state.leftButtonIconStyle,
              childState.leftButtonIconStyle,
            ]}
          />
        }
        {text}
      </TouchableOpacity>
    );
  }

  renderRightButton(navProps) {
    const self = this;
    function tryRender(state, wrapBy) {
      if (!state) {
        return null;
      }
      const rightTitle = state.getRightTitle ? state.getRightTitle(navProps) : state.rightTitle;

      const textStyle = [styles.barRightButtonText, self.props.rightButtonTextStyle,
        state.rightButtonTextStyle];
      const style = [styles.rightButton, self.props.rightButtonStyle, state.rightButtonStyle];
      if (state.rightButton) {
        let Button = state.rightButton;
        if (wrapBy) {
          Button = wrapBy(Button);
        }
        return (
          <Button
            {...self.props}
            {...state}
            key={'rightNavBarBtn'}
            testID="rightNavButton"
            style={style}
            textButtonStyle={textStyle}
          />
        );
      }
      if (state.onRight && (rightTitle || state.rightButtonImage)) {
        const onPress = state.onRight.bind(null, state);
        return (
          <TouchableOpacity
            key={'rightNavBarBtn'}
            testID="rightNavButton"
            style={style}
            onPress={onPress}
          >
            {rightTitle &&
              <Text style={textStyle}>
                {rightTitle}
              </Text>
            }
            {state.rightButtonImage &&
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                <Image
                  source={state.rightButtonImage}
                  style={state.rightButtonIconStyle}
                />
              </View>
            }
          </TouchableOpacity>
        );
      }
      if ((!!state.onRight ^ !!(typeof(rightTitle) !== 'undefined'
        || typeof(state.rightButtonImage) !== 'undefined'))) {
        console.warn(
          `Both onRight and rightTitle/rightButtonImage
            must be specified for the scene: ${state.name}`
        );
      }
      return null;
    }
    return tryRender(this.props.component, this.props.wrapBy) || tryRender(this.props);
  }

  renderLeftButton(navProps) {
    const self = this;
    const drawer = this.context.drawer;
    function tryRender(state, wrapBy) {
      let onPress = state.onLeft;
      let buttonImage = state.leftButtonImage;
      let menuIcon = state.drawerIcon;
      const style = [styles.leftButton, self.props.leftButtonStyle, state.leftButtonStyle];
      const textStyle = [styles.barLeftButtonText, self.props.leftButtonTextStyle,
        state.leftButtonTextStyle];
      const leftButtonStyle = [styles.defaultImageStyle, state.leftButtonIconStyle];
      const leftTitle = state.getLeftTitle ? state.getLeftTitle(navProps) : state.leftTitle;

      if (state.leftButton) {
        let Button = state.leftButton;
        if (wrapBy) {
          Button = wrapBy(Button);
        }
        return (
          <Button
            {...self.props}
            {...state}
            key={'leftNavBarBtn'}
            testID="leftNavButton"
            style={style}
            textStyle={textStyle}
          />
        );
      }

      if (!onPress && !!drawer && typeof drawer.toggle === 'function') {
        buttonImage = state.drawerImage;
        if (buttonImage || menuIcon) {
          onPress = drawer.toggle;
        }
        if (!menuIcon) {
          menuIcon = (
            <Image
              source={buttonImage}
              style={leftButtonStyle}
            />
          );
        }
      }

      if (onPress && (leftTitle || buttonImage)) {
        onPress = onPress.bind(null, state);
        return (
          <TouchableOpacity
            key={'leftNavBarBtn'}
            testID="leftNavButton"
            style={style}
            onPress={onPress}
          >
            {leftTitle &&
              <Text style={textStyle}>
                {leftTitle}
              </Text>
            }
            {buttonImage &&
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                {menuIcon || <Image
                  source={buttonImage}
                  style={state.leftButtonIconStyle || styles.defaultImageStyle}
                />
                }
              </View>
            }
          </TouchableOpacity>
        );
      }
      if ((!!state.onLeft ^ !!(leftTitle || buttonImage))) {
        console.warn(
          `Both onLeft and leftTitle/leftButtonImage
            must be specified for the scene: ${state.name}`
        );
      }
      return null;
    }
    return tryRender(this.props.component, this.props.wrapBy) || tryRender(this.props);
  }

  renderTitle(childState, index:number) {
    let title = this.props.getTitle ? this.props.getTitle(childState) : childState.title;
    if (title === undefined && childState.component && childState.component.title) {
      title = childState.component.title;
    }
    if (typeof(title) === 'function') {
      title = title(childState);
    }
    return (
      <Animated.Text
        {...this.props.titleProps}
        key={childState.key}
        style={[
          styles.title,
          this.props.titleStyle,
          this.props.navigationState.titleStyle,
          childState.titleStyle,
          {
            opacity: this.props.position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0, this.props.titleOpacity, 0],
            }),
            left: this.props.position.interpolate({
              inputRange: [index - 1, index + 1],
              outputRange: [200, -200],
            }),
            right: this.props.position.interpolate({
              inputRange: [index - 1, index + 1],
              outputRange: [-200, 200],
            }),
          },
        ]}
      >
        {title}
      </Animated.Text>
    );
  }

  render() {
    let state = this.props.navigationState;
    let selected = state.children[state.index];
    while (selected.hasOwnProperty('children')) {
      state = selected;
      selected = selected.children[selected.index];
    }
    const navProps = { ...this.props, ...selected };

    const wrapByStyle = (component, wrapStyle) => {
      if (!component) { return null; }
      return (props) => <View style={wrapStyle}>{component(props)}</View>;
    };

    const leftButtonStyle = [styles.leftButton, { alignItems: 'flex-start' }];
    const rightButtonStyle = [styles.rightButton, { alignItems: 'flex-end' }];

    const renderLeftButton = wrapByStyle(selected.renderLeftButton, leftButtonStyle) ||
      wrapByStyle(selected.component.renderLeftButton, leftButtonStyle) ||
      this.renderLeftButton;
    const renderRightButton = wrapByStyle(selected.renderRightButton, rightButtonStyle) ||
      wrapByStyle(selected.component.renderRightButton, rightButtonStyle) ||
      this.renderRightButton;
    const renderBackButton = wrapByStyle(selected.renderBackButton, leftButtonStyle) ||
      wrapByStyle(selected.component.renderBackButton, leftButtonStyle) ||
      this.renderBackButton;
    const renderTitle = selected.renderTitle ||
      selected.component.renderTitle ||
      this.props.renderTitle;
    return (
      <Animated.View
        style={[
          styles.header,
          this.props.navigationBarStyle,
          state.navigationBarStyle,
          selected.navigationBarStyle,
        ]}
      >
        {renderTitle ? renderTitle(navProps) : state.children.map(this.renderTitle, this)}
        {renderBackButton(navProps) || renderLeftButton(navProps)}
     
        {renderRightButton(navProps)}
      </Animated.View>
    );
  }
}

NavBar.propTypes = propTypes;
NavBar.contextTypes = contextTypes;
NavBar.defaultProps = defaultProps;

export default NavBar;