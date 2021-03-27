import React from 'react';
import { BarChart } from 'react-feather';

import {
  Box, Title
} from './style';

const SideBarItem: React.FC = () => {
  return (
    <>
      <Box>
        <BarChart cursor='pointer' width='15px' height='15px' color='#0794B2' />
        <Title>Painel de Controle</Title>
      </Box>
    </>
  );
};

export default SideBarItem;
