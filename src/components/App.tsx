import React from 'react';
import { DataSection } from './DataSection';
import { NavBar } from './NavBar';
import { SearchBar } from './SearchBar';
import { ShearedContainer } from './sheared';

export const App: React.FC = () => {
  return (
    <ShearedContainer>
      <NavBar />
      <SearchBar />
      <DataSection />
    </ShearedContainer>
  );
};
