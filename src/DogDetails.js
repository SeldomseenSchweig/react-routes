import React from "react";
import { useParams } from "react-router-dom";



const DogDetails = (dogs)=>{

    const { name } = useParams();

    return (

        <h1> This dog's name is {name}</h1>
    )





}


export default DogDetails;
