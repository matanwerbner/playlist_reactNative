import React from 'react'
import YoutubeItem from './youtubeItem';

export default({item, onPress}) => {
    return (
        <YoutubeItem item={item} onPress={onPress} />
    )
}