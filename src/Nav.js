import React from 'react';
import { Link } from 'react-router-dom';

function Nav({dogs}) {
    
    console.log(dogs)
//    const lis = dogs.forEach(dog => { <li><Link exact to="/dog/:name" > name</Link></li>
        
//     });

    return (

        <nav>
            <li><Link exact to="/dogs" > Dogs</Link></li>
            <li><Link exact to="/dog/:name" > name</Link></li>
        
    </nav>


    )


}

export default Nav;