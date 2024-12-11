import React from 'react';
import { Link } from 'react-router';


const RockPaperScissorsRules: React.FC = () => {




    const videoStyle: React.CSSProperties = {
        width: '100%',
        height: '300px',
    };


    return (
        <div>


            <div >
                <h1>Rock-Paper-Scissors Rules</h1>
    <iframe
    style={videoStyle}
    src="https://fake-videolink.com"
    title="Rock-Paper-Scissors Instructions"
        ></iframe>
        <p>
        Choose Rock, Paper, or Scissors. The computer will also choose. The
    winner is decided as follows:
    <ul>
        <li>Rock beats Scissors</li>
    <li>Scissors beats Paper</li>
    <li>Paper beats Rock</li>
    </ul>
    </p>
    <Link to="/">Back to Home</Link> |{' '}
    <Link to="/rock-paper-scissors">Play Game</Link>
    </div>
    </div>
);
};


export default RockPaperScissorsRules;
