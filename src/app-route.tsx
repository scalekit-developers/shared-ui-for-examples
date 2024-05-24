import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import { useUserContext } from './user-context';

const AppRoute: React.FC = () => {
  const { loading, user } = useUserContext();
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Profile />} />
    </Routes>
  )
};

export default AppRoute;