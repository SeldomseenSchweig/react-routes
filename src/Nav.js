import React from 'react';
import { Link } from 'react-router-dom';

function Nav({dogs}) {
    
   
        

    return (

        <nav>
            <li><Link exact to="/dogs" > Dogs</Link></li>
            {dogs.map( dog =>(

            <li key={dog.name} >
                <Link to={`/dogs/${dog.name}`}> {dog.name}</Link>
                
            </li>))}    
        </nav>


    )


}

export default Nav;