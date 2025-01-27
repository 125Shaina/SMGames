import React from 'react';
import { Link } from 'react-router';
import { useState } from 'react';






const RockPaperScissorsGame = () => {


    const choices = ['Rock', 'Paper', 'Scissors'];
    const [playerChoice, setPlayerChoice] = useState<string | null>(null);
    const [computerChoice, setComputerChoice] = useState<string | null>(null);
    const [result, setResult] = useState<string | null>(null);


    const play = (choice: string) => {
        const computer = choices[Math.floor(Math.random() * 3)];
        setPlayerChoice(choice);
        setComputerChoice(computer);


        if (choice === computer) {
            setResult('Draw');
        } else if (
            (choice === 'Rock' && computer === 'Scissors') ||
            (choice === 'Paper' && computer === 'Rock') ||
            (choice === 'Scissors' && computer === 'Paper')
        ) {
            setResult('You Win!');
        } else {
            setResult('Computer Wins!');
        }
    };




    return (
        <div>
            <div>
                <p>
                    Choose Rock, Paper, or Scissors. The computer will also choose. The
                    winner is decided as follows:

                </p>
                {
                    <div>
                        <h2>Rock-Paper-Scissors</h2>
                        <p>Select your choice:</p>
                        <div>
                            {choices.map((choice) => (
                                <button key={choice} onClick={() => play(choice)}>
                                    {choice}
                                </button>
                            ))}
                        </div>
                        {playerChoice && computerChoice && (
                            <div>
                                <p>You chose: {playerChoice}</p>
                                <p>Computer chose: {computerChoice}</p>
                                <p>{result}</p>
                            </div>
                        )}
                    </div>
                }
                <Link to="/">Back to Home</Link>
            </div>
        </div>
    );
};
export default RockPaperScissorsGame;