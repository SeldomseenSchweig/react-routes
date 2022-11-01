import React, {useState} from "react";
import {Redirect, useHistory, Link } from "react-router-dom";




const ColorForm = ({colors, setColors}) => {
    const [color, setColor] = useState('black')
    const [word, setWord] = useState('black')
    const history = useHistory();
    const handleSubmit = (e)=>{
        e.preventDefault();
        let newColors = [...colors, {name:word, bg:color}];

        setColors(newColors)
        console.log(colors)       
        history.push('/colors')
       
        
    }
        
  

    return (
        <>
                    <h1>Choose a color</h1>

            <form onSubmit={handleSubmit}>
            <input name='word' type='text' value={word} onChange={e=>setWord(e.target.value)} ></input>
            <label htmlFor='Word'> Word</label>
                <input name='color' type='color' value={color} onChange={e=>setColor(e.target.value)} ></input>
                <label htmlFor='color'> Color</label>

                <button> Submit</button>
            </form>
            
            <Link to='/colors'> <button> Home</button></Link>
           

        </>

    )
}

export default ColorForm;