import React from 'react';

import {
  Cardbox
} from './style';

import Header from '../Header';

const Card: React.FC = () => {
  return (
    <>
      <Cardbox width='large' height='small' >
        <Header />
      </Cardbox>
    </>
  );
};

export default Card;
