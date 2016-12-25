
import React from 'react';
import {default as YoutubePlayerBindings} from 'youtube-player';

/**
 * @property {string} videoId
 */
export default class YoutubePlayer extends React.Component {
    static propTypes = {
        videoId: React.PropTypes.string.isRequired,
        configuration: React.PropTypes.shape({
            autoplay: React.PropTypes.oneOf([0, 1]),
            color: React.PropTypes.oneOf(['red', 'white']),
            theme: React.PropTypes.oneOf(['dark', 'light'])
        }),
        height: React.PropTypes.string,
        width: React.PropTypes.string,
    };

    static defaultProps = {
        configuration: {
            autoplay: 1,
            color: 'white',
            theme: 'light',
        },
        height: null,
        width: '100%'
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
        const {width, height} = this.props;

        const style = {
            'display': 'block',
            'width': width,
            'height': height
        };

        return (
            <div ref={(element) => { this.refPlayer = element; }} style={style}></div>
        );
    }
}