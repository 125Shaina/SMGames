import React from "react";
import { Link } from "react-router";
import RockPaperScissorsGame from "./RockPaperScissorsGame";


const HomePage: React.FC = () => {
    const homeStyle: React.CSSProperties = {
        textAlign: "center",
        padding: "20px",
    };


    const gameStyle: React.CSSProperties = {
        display: "flex",
        justifyContent: "space-around",
        marginTop: "20px",
    };


    const cardStyle: React.CSSProperties = {
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        textAlign: "center",
        width: "300px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    };


    const imageStyle: React.CSSProperties = {
        width: "100%",
        borderRadius: "8px",
    };


    return (
        <div style={homeStyle}>
            <h1>Welcome to Shaina's Games!</h1>
            <p>Choose a game to play and enjoy!</p>
            <div style={gameStyle}>
                <div style={cardStyle}>
                    <h2>Tic-Tac-Toe</h2>
                    <img
                        src="tic-tac-toe-image.jpg"
                        alt="Tic-Tac-Toe"
                        style={imageStyle}
                    />
                    <p>Players: 2</p>
                    {/* Update links to match routing structure */}
                    <Link to="/tic-tac-toe">Rules</Link> |{" "}
                    <Link to="/tic-tac-toe/game">Play</Link>
                </div>
                <div style={cardStyle}>
                    <h2>Rock-Paper-Scissors</h2>
                    <img
                        src="rock-paper-scissors-image.jpg"
                        alt="Rock-Paper-Scissors"
                        style={imageStyle}
                    />
                    <p>Players: 1</p>
                    {/* Update links to match routing structure */}
                    <Link to="/rock-paper-scissors">Rules</Link> |{" "}
                    <Link to="/rock-paper-scissors/game">Play</Link>
                </div>
            </div>
        </div>
    );
};
export default HomePage;


