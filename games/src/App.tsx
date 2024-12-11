import React from 'react';
import { Link, Outlet } from 'react-router';


const App: React.FC = () => {
  const menuStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#333',
    padding: '10px',
    color: '#fff',
  };


  const menuItemStyle: React.CSSProperties = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  };
  const pageStyle: React.CSSProperties = {
    padding: '20px',
    textAlign: 'center',
  };


  return (


      <div>


        <nav style={menuStyle}>
          <Link to="/" style={menuItemStyle}>
            Home
          </Link>
          <Link to="/tic-tac-toe" style={menuItemStyle}>
            Tic-Tac-Toe Rules
          </Link>
          <Link to="/tic-tac-toe/game" style={menuItemStyle}>
            Tic-Tac-Toe
          </Link>
          <Link to="/rock-paper-scissors" style={menuItemStyle}>
            Rock-Paper-Scissors Rules
          </Link>
          <Link to="/rock-paper-scissors/game" style={menuItemStyle}>
            Rock-Paper-Scissors
          </Link>
        </nav>
        <main>
          <div style={pageStyle}>
            <Outlet/>
          </div>


        </main>
      </div>


  );
};


export default App;
