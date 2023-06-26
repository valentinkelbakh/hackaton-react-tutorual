import React from 'react'

function PhotoItem ({photo_url}) {
    return (
        <div>
            <img src = {photo_url} />
        </div>
    )
}

export default PhotoItem