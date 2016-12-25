
import React from 'react';
import {default as YoutubePlayerBindings} from 'youtube-player';

export default class YoutubePlayer extends React.Component {
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
        this.player.loadVideoById('RnBT9uUYb1w');
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