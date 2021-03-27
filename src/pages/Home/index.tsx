import React, { useState } from 'react';
import { Menu, BarChart } from 'react-feather';

import Card from '../../components/Card/index';
import SideBarItem from '../../components/SideBarItem/index';

import {
  View, Dock, MenuButton, SideBar
} from './style';

const Home: React.FC = () => {
  const [hide, setHide] = useState(false);
  return (
    <View>
      <Dock>
        <MenuButton onClick={() => setHide(!hide)} >
          <Menu width='15px' height='15px' />
        </MenuButton>
      </Dock>
      <SideBar hide={hide}>
        <SideBarItem />
      </SideBar>
    </View>
  );
};

export default Home;
