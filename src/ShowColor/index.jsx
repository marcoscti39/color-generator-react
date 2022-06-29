import React, {useState} from 'react'

import './index.css'

export default function ShowColor({colors}) {
    return (
        <section className="show-color-container">
            {colors ? colors.map((color,index) =>{
                const rgb = color.rgb.join(",")
                const hex = `#${color.hex}`

                return(
                    <article key={index} 
                    className="color-square" 
                    style={{backgroundColor: `rgb(${rgb})`, 
                    color: `${index > 9 ? "white": "black"}`}}
                    onClick={() => navigator.clipboard.writeText(hex)}
                    onClick={(e) => e.target.classList.toggle("copied")}>
                        
                        <div>
                            {color.weight}%
                        </div>

                        <div>
                            {hex}
                        </div>
                    </article>
                )
            }): <div style={{fontSize: "4rem", textAlign: "center", paddingTop: "2.5rem", color: "red", textTransform: "capitalize", position: "absolute", marginLeft: "1rem"}} >
                 this color does not exits
                </div>}
           
            
           

        </section>
    )
}
