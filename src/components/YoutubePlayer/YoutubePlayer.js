
import React from 'react';
import {default as YoutubePlayerBindings} from 'youtube-player';

/**
 * @property {string} videoId
 */
export default class YoutubePlayer extends React.Component {
    static propTypes = {
        videoId: React.PropTypes.string.isRequired
    };

    componentDidMount () {
        this.player = YoutubePlayerBindings(
            this.refPlayer,
            {
                playerVars: {
                    autoplay: 0,
                    color: 'white',
                }
            }
        );

        this.player.loadVideoById(
            this.props.videoId
        );
    }

    render() {
        const style = {
            display: 'block',
            height: '100%',
            width: '100%'
        };

        return (
            <div ref={(element) => { this.refPlayer = element; }} style={style}></div>
        );
    }
}