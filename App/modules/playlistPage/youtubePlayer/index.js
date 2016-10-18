import React from 'react'
import {View} from 'react-native'
import YouTube from 'react-native-youtube';
import appConfig from '../../../Config/AppConfig'
import styles from './youtubeplayer.style'

class YoutubePlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            play: true
        }
        this._onReady = this
            ._onReady
            .bind(this);
    }

    _onReady() {
        this.setState({play: true})
    }

    render() {
        const {item, onError, onNext} = this.props;

        const onChangeState = (e) => {
            let videoState = e.nativeEvent.state;
            if (videoState == "ended") {
                this.setState({
                    play: false
                })
                onNext();
            }
        }
        return (
            <View>
                <YouTube videoId={item.youtubeId} // The YouTube video ID
                    play={this.state.play} // control playback of video with true/false
                    playsInline={true} // control whether the video should play inline
                    apiKey={appConfig.youtubeApiKey} 
                    onError={onError} 
                    onReady={ this.onReady }
                    onChangeState={onChangeState} 
                    style={styles.playerStyle}/>
            </View>
        )
    }
}

export default YoutubePlayer;