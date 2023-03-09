import React from 'react';
import DataSection from './DataSection/DataSection';
import NavBar from './NavBar/NavBar';
import SearchBar from './SearchBar/SearchBar';
import ShearedContainer from './sheared/ShearedContainer';

export const App: React.FC = () => {
  return (
    <ShearedContainer>
      <NavBar />
      <SearchBar />
      <DataSection />
    </ShearedContainer>
  );
};
