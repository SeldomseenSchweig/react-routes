import React, {useState} from "react";
import { Route, Redirect, Switch } from 'react-router-dom';
import  ColorList from "./ColorList";
import Color from "./Color";
import ColorForm from "./ColorForm";
 


function ColorRoutes() {
  const [colors, setColors] = useState([ 
      {name:"red", bg: '#ff5050'}, 
      {name:"blue", bg:'#3351FF'
      }, 
      {name:"purple", bg:'#74438E'
      }
  ])

   

  return (
        <>
          <Switch>
            <Route exact path="/colors" > 
                <ColorList colors={colors} />
            </Route>

            <Route exact path="/colors/new" >
                <ColorForm setColors={setColors} colors={colors}/>
            </Route>

            <Route exact path="/colors/:color" >
                <Color colors={colors}/>
            </Route>



            <Redirect to="/colors" />


            </Switch>
        </>
  );
}

export default ColorRoutes;