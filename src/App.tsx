import React from 'react';
import './App.css';
import './styles/styles.ts';
import { RouterProvider } from "react-router-dom";
import { router } from './config/AllRoutes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
