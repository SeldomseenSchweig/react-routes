import React from "react";
import { Link } from "react-router-dom";



const DogList = ({dogs})=>{
    console.log(dogs)
    console.log(`/dog-pictures/${dogs[0].src}.jpg`)
    



    return (
        <ul>
            {dogs.map( dog =>(

            <li key={dog.name} >
                <Link to={`/dogs/${dog.name}`}>
                    <img src={require(`../dog-pictures/${dog.src}.jpg`)} style={{maxHeight:"100px"}}/>
                    Click to meet {dog.name}
                </Link>
                
            </li>))}
        </ul>

    )





}


export default DogList;