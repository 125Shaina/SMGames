import {Outlet} from "react-router";

export default function MyComponent()
{
 return (
     <div>
         <h1> Rock-Paper-Scissors</h1>
         <h3> 1. Rock beats Scissors</h3>
         <h3> 2. Scissors beats Paper</h3>
         <h3> 3. Paper beats Rock</h3>
        <Outlet/>
     </div>

 )
}
