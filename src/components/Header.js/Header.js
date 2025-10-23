import React from 'react';
import Popular from './Popular';
import TopRated from './TopRated';
import Upcoming from './Upcoming';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import Text from './Text';

const Header = () => {
  return (
    <header>
      <h1>MovieDb</h1>
      <nav>
        <Popular />
        <TopRated />
        <Upcoming />
      </nav>
      <div className="search-bar">
        <SearchInput />
        <SearchButton />
      </div>
    </header>
  );
};

export default Header; 
