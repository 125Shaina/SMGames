import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router';
import App from './App';
import './index.css';
import TicTacToe from './TicTacToeGame';
import TicTacToeGame from './TicTacToeGame';
import TicTacToeRules from './TicTacToeRules';
import RockPaperScissors from './RockPaperScissorsGame';
import RockPaperScissorsGame from './RockPaperScissorsGame';
import RockPaperScissorsRules from './RockPaperScissorsRules';
import Githubsearch from './githubsearch';
import HomePage from './HomePage';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);


root.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/githubsearch" element={<Githubsearch/>} />
                <Route path="/" element={<App />}>

                    <Route index element={<HomePage />} />
                    <Route path="tic-tac-toe" element={<TicTacToe />}>
                        <Route index element={<TicTacToeRules />} />
                        <Route path="game" element={<TicTacToeGame />} />
                    </Route>
                    <Route path="rock-paper-scissors" element={<RockPaperScissors />}>
                        <Route index element={<RockPaperScissorsRules />} />
                        <Route path="game" element={<RockPaperScissorsGame />} />
                    </Route>
                </Route>
            </Routes>
        </HashRouter>
    </React.StrictMode>
);
