import React from 'react';
import axios from 'axios';
import TrackContainer from '../Component/TrackContainer';
import getApiurl from '../Util/getApiUrl';

export default class Favorite extends React.Component {
    constructor() {
        super()
        this.state = {
            trackEl: []
        }
    }

    async componentDidMount() {
        const response = await axios.get(getApiurl('api', `/me/favorites?offset=0`));
        const tracks = this.state.trackEl;
        response.data.map(track => {
            const trackEl = () => {
                return (
                    <TrackContainer key={track.id} title={track.title} coverImage={track.coverImage} trackId={track.id}
                                    author_username={track.author.username} author_fullName={track.author.fullname}/>
                )
            }
            return tracks.push(trackEl());
        });
        this.setState({
            tracks: tracks.reverse(),
        })
    }

    render() {
        return (
            <div>
                {this.state.trackEl}
            </div>
        )
    }
}