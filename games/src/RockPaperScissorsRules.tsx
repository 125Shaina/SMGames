import React from 'react';
import { Link } from 'react-router';


const RockPaperScissorsRules: React.FC = () => {

    const videoStyle: React.CSSProperties = {
        width: '100%',
        height: '300px',
    };

    return (
        <div>
            <div>
                <h1>Rock-Paper-Scissors Rules</h1>
                <p>
                    Choose Rock, Paper, or Scissors. The computer will also choose. The
                    winner is decided as follows:
                    <ul>
                        <li>Rock beats Scissors</li>
                        <li>Scissors beats Paper</li>
                        <li>Paper beats Rock</li>
                    </ul>
                </p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/USEjXNCTvcc?si=-L_e-hrn2Kr5yn2R"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                <Link to="/">Back to Home</Link> |{' '}
                <Link to="/rock-paper-scissors">Play Game</Link>
            </div>
        </div>
    );
};


export default RockPaperScissorsRules;
