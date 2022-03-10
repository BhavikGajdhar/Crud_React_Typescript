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
  );
}

export default App;
