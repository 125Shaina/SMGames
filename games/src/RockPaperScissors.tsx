import React from 'react';
import { Outlet } from 'react-router';


const RockPaperScissors: React.FC = () => {




    return (
        <div>


            <h1>Rock-Paper-Scissors</h1>
            <Outlet />
        </div>
    );
};


export default RockPaperScissors;
