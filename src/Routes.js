import React from "react";
import { Route, Redirect, Switch } from 'react-router-dom';
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import { useParams } from "react-router-dom";



function Routes({dogs}) {

   

  return (
        <>
          <Switch>
            <Route exact path="/dogs" > 
                <DogList dogs={dogs}/>
            </Route>

            <Route path="/dogs/:name" >
                
            
                <DogDetails dogs={dogs}/>
            </Route>

            <Redirect to="/dogs" />


            </Switch>
        </>
  );
}

export default Routes;