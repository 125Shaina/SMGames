import React from 'react';
import { Link } from 'react-router';


const TicTacToeRules: React.FC = () => {




    const videoStyle: React.CSSProperties = {
        width: '100%',
        height: '300px',
    };




    return (


        <div>




            <div >
                <h1>Tic-Tac-Toe Rules</h1>
    <iframe
    style={videoStyle}
    src="https://fake-videolink.com"
    title="Tic-Tac-Toe Instructions"
        ></iframe>
        <p>
        Players take turns marking a square with X or O. The first player to
    align three marks in a row wins. If all squares are filled without a
    winner, it's a draw.
    </p>
    <Link to="/">Back to Home</Link> |{' '}
    <Link to="/tic-tac-toe/game">Play Game</Link>
    </div>
    </div>
);
};


export default TicTacToeRules;
