import React, {Component} from 'react';
import YouTube from 'react-native-youtube';
import appConfig from '../../../Config/AppConfig'
import styles from './PlYoutube.styles';

export default class _YoutubePlayer extends Component {
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
                onNext();
            }
        }
        return (<YouTube
            videoId={item.id.videoId}
            play={this.state.play}
            playsInline={true}
            onReady={this._onReady}
            apiKey={appConfig.youtubeApiKey}
            onError={onError}
            onChangeState={onChangeState}
            style={styles.playerStyle}/>)
    }

}