import React from 'react';
import {Link, Outlet} from 'react-router';


const TicTacToeRules: React.FC = () => {




    const videoStyle: React.CSSProperties = {
        width: '100%',
        height: '300px',
    };




    return (


        <div>


            <div>
                <h1>Tic-Tac-Toe Rules</h1>

                <p>
                    Players take turns marking a square with X or O. The first player to
                    align three marks in a row wins. If all squares are filled without a
                    winner, it's a draw.
                </p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/USEjXNCTvcc?si=G3Ai-WaxbtJnSkex"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <Outlet/>
                <Link to="/">Back to Home</Link> |{' '}
                <Link to="/tic-tac-toe/game">Play Game</Link>
            </div>
        </div>
    );
};


export default TicTacToeRules;
