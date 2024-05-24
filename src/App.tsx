import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoute from './app-route';
import { UserContextProvider } from './user-context';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <AppRoute />
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
