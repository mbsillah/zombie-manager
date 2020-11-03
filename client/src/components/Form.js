import React from 'react'

function Form({ locations, currentLocation }) {
    return (
        <form>
            <select value={0}>
                {/* adding list of locations, will not render current location */}
            </select>
        </form>
    )
}

//mutation to saveZombie location

export default Form
