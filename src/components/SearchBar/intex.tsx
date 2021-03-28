import React, { useState } from 'react';
import { Search } from 'react-feather';

import {
  Input, IconBox
} from './style';

const SearchBar: React.FC = () => {
  const [text, setText] = useState('');
  return (
    <>
      <Input type='text' placeholder='Pesquise' onChange={(event) => { setText(event.target.value); }} />
      <IconBox type='submit'>
        <Search width='15px' height='15px' cursor='pointer' onClick={() => console.log(new Date)} />
      </IconBox>
    </>
  );
};

export default SearchBar;
