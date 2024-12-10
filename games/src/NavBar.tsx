import React from 'react';
import {Outlet, useNavigate} from "react-router";


export default function NavBar ()
{
    let navigate = useNavigate();
     function goNavigate(url:string)
     {
         navigate(url);
     }
    return (
        <nav>
            <div onClick={() => goNavigate("/")}> Home</div>
            <div onClick={() => goNavigate("/TicTacToe")}> TicTacToe</div>
            <div onClick={() => goNavigate("/TicTacToe/Play")}> Play</div>
            <div onClick={() => goNavigate("/RockPaperScissors")}> Rock paper Scissors</div>
            <div onClick={() => goNavigate("/RockPaperScissors/Play")}> Play</div>
            <Outlet/>
        </nav>

    )
}