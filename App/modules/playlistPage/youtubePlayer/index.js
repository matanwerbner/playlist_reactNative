import React from 'react'
import { View } from 'react-native'
import YouTube from 'react-native-youtube';
import appConfig from '../../../Config/AppConfig'
import styles from './youtubeplayer.style'

export default({item, onError, onNext}) => {
    const onChangeState = (e) => {
        let videoState = e.nativeEvent.state;
        if(videoState == "ended") {
            onNext();
        }
    }
    return (
        <View>
            <YouTube videoId={ item.youtubeId } // The YouTube video ID
                play={true} // control playback of video with true/false
                playsInline={true} // control whether the video should play inline
                apiKey={appConfig.youtubeApiKey} 
                onError={onError} onChangeState={onChangeState} style={styles.playerStyle}/>
        </View>
    )
}