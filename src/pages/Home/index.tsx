import React, { useState } from 'react';
import { Menu } from 'react-feather';

import {
  EventsHistory,
  DailyInspections,
  DailyPlans,
  ScheduledInspections,
  PlansOverview,
  PlansUpdates,
  SideBarItem
} from '../../components/index';

import {
  View, BarFunctions, HomeContent, Title, Dock, MenuButton, SideBar, Cards, FirstColumm, SecondColumn
} from './style';

const Home: React.FC = () => {
  const [hide, setHide] = useState(false);

  return (
    <View>

      <BarFunctions hide={hide} >

        <Dock>
          <MenuButton onClick={() => setHide(!hide)} >
            <Menu width='15px' height='15px' />
          </MenuButton>
        </Dock>

        <SideBar hide={hide}>
          <SideBarItem />
        </SideBar>

      </BarFunctions>

      <HomeContent hide={hide} >
        <Title>Painel de Controle</Title>

        <Cards>

          <FirstColumm>
            <EventsHistory />
            <DailyInspections />
            <DailyPlans />
            <ScheduledInspections />
          </FirstColumm>

          <SecondColumn>
            <PlansOverview />
            <PlansUpdates />
          </SecondColumn>

        </Cards>
      </HomeContent>
    </View >
  );
};

export default Home;
