import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouting from './AppRouting';
import { Route } from 'react-router-dom';

function App() {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="App">
          <AppRouting/>
        </div>
      </Suspense>
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    // </div>
  );
}

export default App;
