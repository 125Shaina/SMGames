import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter, Outlet, Route, Routes} from "react-router";
import PlayRSP from "./RSPPlay";
import RockPaperScissorsGame from "./RockPaperScissors";
import TicTacToeGame from "./TicTacToe";
import TTTPlay from "./TTTPlay";
import NavBar from "./NavBar";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
        <Routes>
            <Route path="/" element={<NavBar/>}>
                <Route path ="/TicTacToe" element={<TicTacToeGame/>}>
                    <Route path = "/TicTacToe/Play" element={<TTTPlay/>}>

                    </Route>
                    <Route index element={null}/>
                </Route>
                <Route path="/RockPaperScissors" element={<RockPaperScissorsGame/>}>
                    <Route path = "/RockPaperScissors/Play" element={<PlayRSP/>}>
`
                    </Route>
                    <Route index element={null}/>
                </Route>
                <Route index element={null}/>
            </Route>
        </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
