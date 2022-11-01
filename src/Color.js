import React from "react";
import { useParams, Link, BrowserRouter, Redirect } from "react-router-dom";





const Color = ({colors}) => {

        const { color } = useParams();
        let shade = colors.find(realColor => {

                console.log(realColor.name, color)
                return realColor.name  === color
        });
        if(!shade ){
           
                return <Redirect to="/colors" />
            
        }

    return (
            
       <div style={{backgroundColor: shade.bg, width:"100vw", height:"100vh"}}>
               <h1>Isn't this a lovely shade of {shade.name}</h1>
               <Link exact to='/colors'>Home</Link>
    </div>

    )
}

export default Color;