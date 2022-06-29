import React from 'react'

import './index.css'

export default function GenerateColor({renderColor}) {
    return (
        <form className="header">
            <h1 className="title" >color generator</h1>
            <input className="input-color" type="text" />
            <button  className="generate-color-btn" onClick={renderColor} >submit</button>
        </form>
    )
}
