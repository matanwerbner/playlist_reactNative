import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './Styles/FacebookTabBar.styles'
import Icon from 'react-native-vector-icons/MaterialIcons';

const FacebookTabBar = React.createClass({
  tabIcons: [],

  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
  },

  componentDidMount() {
    this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
  },

  setAnimationValue({ value, }) {
    this.tabIcons.forEach((icon, i) => {
      const progress = (value - i >= 0 && value - i <= 1) ? value - i : 1;
      icon.setNativeProps({
        style: {
          color: this.iconColor(progress),
        },
      });
    });
  },

  //color between rgb(59,89,152) and rgb(204,204,204)
  iconColor(progress) {
    const red = 59 + (204 - 59) * progress;
    const green = 89 + (204 - 89) * progress;
    const blue = 152 + (204 - 152) * progress;
    return `rgb(${red}, ${green}, ${blue})`;
  },

  render() {
    return <View style={[styles.tabs, this.props.style, ]}>
      {this.props.tabs.map((tab, i) => {
        const isActive = this.props.activeTab === i ;
        return <TouchableOpacity 
        key={i} 
        onPress={() => this.props.goToPage(i)} 
        style={[styles.tab.container, 
          isActive ? styles.tab.activeContainer : {}]}>
          <Icon
            name={tab.icon}
            size={20}
            color={isActive ? 'rgb(59,89,152)' : 'rgb(204,204,204)'}
            ref={(icon) => { this.tabIcons[i] = icon; }}
          />
          <Text style={
            [styles.tab.text, 
            isActive
              ?  styles.tab.activeText
              : {} 
            ]}>{ tab.text }</Text>
        </TouchableOpacity>;
      })}
    </View>;
  },
});

export default FacebookTabBar;