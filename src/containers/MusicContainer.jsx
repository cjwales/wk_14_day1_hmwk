import React, { Component } from 'react'

export class MusicContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            songs: []
        }
    }

    componentDidMount() {
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'

        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({
                songs: data
            }))
            .catch(err => console.error);
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default MusicContainer
