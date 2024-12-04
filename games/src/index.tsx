import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter, Route, Routes} from "react-router";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
        <Routes>
            <Route path="/" element={null}>
                <Route path ="/TicTacToe" element={null}>
                    <Route path = "/TicTacToe/Play" element={null}>

                    </Route>
                    <Route index element={null}/>
                </Route>
                <Route path="/RockPaperScissors" element={null}>
                    <Route path = "/RockPaperScissors/Play" element={null}>

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
