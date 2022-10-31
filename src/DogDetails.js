import React from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";




const DogDetails = ({dogs})=>{

        const { name } = useParams();
        
    let dog = dogs.find(dog => dog.name === name);
    if(!dog ){
       
            return <Redirect to="/dogs" />
        
    }


    return (

       <div style={{"align-content":"center"}}>
       <h3>{dog.name}</h3>
       <h3>{dog.age}</h3>
       <h3>{dog.facts}</h3>
       <img src={require(`../dog-pictures/${dog.src}.jpg`)} style={{maxHeight:"200px"}}/>

    </div>

    )





}


export default DogDetails;
