import {Outlet} from "react-router";

export default function TicTacToeGame()
{
    return (
        <div>
            <p>
                play the game
            </p>

               <Outlet/>
        </div>

    )
}