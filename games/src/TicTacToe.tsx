import React from 'react';
import { Outlet } from 'react-router';


const TicTacToe: React.FC = () => {




    return (
        <div >
            <h1>Tic-Tac-Toe</h1>
            <Outlet />
        </div>
    );
};


export default TicTacToe;
