import React from "react";
import { Route, Redirect, Switch } from 'react-router-dom';
import DogList from "./DogList";
import DogDetails from "./DogDetails";



function Routes() {
  return (
        <>
          <Switch>
            <Route exact path="/dogs/:name" >  
                <DogDetails />
            </Route>


            <Route exact path="/dogs" > 
                <DogList />
            </Route>
              


              <Redirect to="/dogs" />
            </Switch>
        </>
  );
}

export default Routes;