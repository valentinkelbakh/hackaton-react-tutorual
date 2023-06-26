import React, { useState } from 'react'

function ToggleText() {
    const [isTextShown, setIsTextShown] = useState(false)
    var buttonText = isTextShown ? 'Hide' : 'Show'
    function HandleClick() {
        setIsTextShown(!isTextShown)

    }
    return (
        <>
            <button onClick={HandleClick}>{buttonText} text</button>

            {isTextShown === true ?
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend nisl dolor, a dictum leo semper sed. Proin tincidunt magna eget nulla ullamcorper, porta pulvinar ligula malesuada. Ut ut neque accumsan, feugiat enim auctor, fringilla ipsum. Nam eget commodo neque, non ultrices diam. Praesent leo tellus, blandit vitae velit nec, dictum suscipit tellus. Aliquam suscipit nec dui ut gravida. Cras eleifend augue id magna rhoncus laoreet ac et ligula. Cras dolor magna, pretium vitae erat ut, finibus rutrum sapien. Maecenas suscipit lorem quis dictum facilisis. Vestibulum pulvinar leo in sapien vulputate, non ultrices odio porta. Sed nec eros et nisi scelerisque sagittis nec sed mi.

                </p> : ''}
        </>
    )
}

export default ToggleText