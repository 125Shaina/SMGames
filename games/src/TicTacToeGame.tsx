import {Outlet} from "react-router";

export default function TicTacToeGame()
{
    return (
        <div>
            <h1> Tic-Tac-Toe</h1>
            <h3> Players choose who will be playing as X and who as O</h3>
            <h3> Players take turns choosing one of the unoccupied squares</h3>
            <h3> The goal is to connect three in a row vertically, horizontally, or diagonally, If all spaces have been
                filled without a winner, the game ends in a draw</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/USEjXNCTvcc?si=G3Ai-WaxbtJnSkex"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <Outlet/>
        </div>

    )
}