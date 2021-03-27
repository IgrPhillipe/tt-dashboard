import React from 'react';
import { Settings } from 'react-feather';

import {
  Headerbox,
  Top,
  Title,
  Subtitle
} from './style';

const Header: React.FC = () => {
  return (
    <>
      <Headerbox>
        <Top>
          <Title>Histórico de eventos</Title>
          <Settings cursor='pointer' onClick={() => console.log('click')} />
        </Top>
        <Subtitle>Status do dia</Subtitle>
      </Headerbox>
    </>
  );
};

export default Header;