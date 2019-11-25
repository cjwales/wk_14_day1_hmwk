import React from 'react'

export const MusicItem = (props) => {
    return (
        <div>
            <li>{props.song.title.label}</li>
        </div>
    )
}

export default MusicItem;