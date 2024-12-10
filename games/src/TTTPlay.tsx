import React,{useState} from "react";
import TTTImg from "./TTTImg";

export default function TTTPlayG()
{
    // 0-O. 1-x, 2- neither
    const[board, setBoard] = useState([-1,-1,-1,-1,-1,-1,-1,-1,-1]);
    const[currTurn, setTurn] = useState(0);

    const[isDone, setIsDone] = useState(false);
    const[whoWon, setWhoWon] = useState("true");

    type winType = 0| 1| -1;
    function play(turn: number): winType
    {
        // 0 1 2
        // 3 4 5
        // 6 7 8
        let player = turn as winType;
        if(board[0]=== player && board[4]=== player && board[8]===player)
        {
            return player;
        }
        else if (board[2]=== player && board[4]===player && board[6]===player)
        {
            return player;
        }
        else if (board[0]=== player && board[3]===player && board[6]===player)
        {
            return player;
        }
        else if (board[1]=== player && board[4]===player && board[7]===player)
        {
            return player;
        }
        else if (board[2]=== player && board[5]===player && board[8]===player)
        {
            return player;
        }
         return -1;

    }
    function turn(squareNumber: number)
    {
        return
    }
    return(
        <>
            <div className="ttt-game-panel">
                <div className="ttt-board">
                    <div className="ttt-square" onClick={()=> turn(0)}><TTTImg player = {board[0] as 0|1|-1}/></div>
                    <div className="ttt-square" onClick={()=> turn(1)}><TTTImg player = {board[1] as 0|1|-1}/></div>
                    <div className="ttt-square" onClick={()=> turn(2)}><TTTImg player = {board[2] as 0|1|-1}/></div>
                    <div className="ttt-square" onClick={()=> turn(3)}><TTTImg player = {board[3] as 0|1|-1}/></div>
                    <div className="ttt-square" onClick={()=> turn(4)}><TTTImg player = {board[4] as 0|1|-1}/></div>
                    <div className="ttt-square" onClick={()=> turn(5)}><TTTImg player = {board[5] as 0|1|-1}/></div>
                    <div className="ttt-square" onClick={()=> turn(6)}><TTTImg player = {board[6] as 0|1|-1}/></div>
                    <div className="ttt-square" onClick={()=> turn(7)}><TTTImg player = {board[7] as 0|1|-1}/></div>
                    <div className="ttt-square" onClick={()=> turn(8)}><TTTImg player = {board[8] as 0|1|-1}/></div>
                </div>
                {isDone && (
                    <h2> Result: {} Won</h2>
                )}
            </div>
        </>
    );
}


