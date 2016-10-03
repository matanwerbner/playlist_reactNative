import React from 'react'
import  { View, WebView }  from 'react-native';

export default React.createClass({
  render: function() {
    return (
      <View style={{flex: 1}}>
        <WebView
          style={{flex:1}}
          javaScriptEnabled={true}
          source={{uri: 'https://www.youtube.com/embed/GTkMghTOsEY?rel=0&autoplay=0&showinfo=0&controls=0'}}
        />
      </View>
    );
  }
});