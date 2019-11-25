import React from 'react'
import MusicItem from './MusicItem';

export const MusicList = (props) => {

    const items = props.songs.map((song, index) => {
        return <MusicItem value={index} key={index} song={song}></MusicItem>
    })

    if (!props.songs) {
        return null
    }
    return (
        <div>
            <ol>
                {items}
            </ol>
        </div>
    )
}

export default MusicList;
