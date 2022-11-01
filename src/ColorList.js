import React from "react";
import { Link } from "react-router-dom";




const ColorList = ({colors}) =>{
    console.log(colors)

    

    return (
        <ul>
            <Link exact to='/colors/new'><button> Choose a new color</button></Link>
            {colors.map( color =>(

            <li key={color.name} >
                <Link exact to={`/colors/${color.name}`}>{color.name}</Link>
                
            </li>))}
        </ul>

    )





}


export default ColorList;