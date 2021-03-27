import React, { useState } from 'react';
import { Menu, BarChart } from 'react-feather';

import Card from '../../components/Card/index';
import SideBarItem from '../../components/SideBarItem/index';

import {
  View, BarFunctions, HomeContent, Title, Dock, MenuButton, SideBar, Cards
} from './style';

const Home: React.FC = () => {
  const [hide, setHide] = useState(false);
  return (
    <View>
      <BarFunctions>
        <Dock>
          <MenuButton onClick={() => setHide(!hide)} >
            <Menu width='15px' height='15px' />
          </MenuButton>
        </Dock>
        <SideBar hide={hide}>
          <SideBarItem />
        </SideBar>
      </BarFunctions>

      <HomeContent>
        <Title>Painel de Controle</Title>

        <Cards>
          <Card width='large' height='small' />
          <Card width='small' height='small' />
          <Card width='small' height='small' />
          <Card width='small' height='small' />
          <Card width='small' height='large' />
          <Card width='large' height='small' />
        </Cards>
      </HomeContent>
    </View>
  );
};

export default Home;
