import React, { useState } from 'react';
import { Menu } from 'react-feather';

import EventsHistory from '../../components/EventsHistory/index';
import DailyInspections from '../../components/Inspections/DailyInspections/index';
import DailyPlans from '../../components/ActionsPlans/DailyPlans/index';
import ScheduledInspections from '../../components/Inspections/ScheduledInspections/index';
import PlansOvewview from '../../components/ActionsPlans/Overview/index';


import Header from '../../components/Header/index';
import SideBarItem from '../../components/SideBarItem/index';
import PeriodSelect from '../../components/PeriodSelect/index';
import SearchBar from '../../components/SearchBar/intex';

import { DataContext } from '../../dataContext';

import {
  View, BarFunctions, HomeContent, Title, Dock, MenuButton, SideBar, Cards, FirstColumm, SecondColumn, Card, SelectBox, SearchBox, ChartBox,
} from './style';

const Home: React.FC = () => {
  const [hide, setHide] = useState(false);

  const [cardTwo, setCardTwo] = useState({
    title: 'Planos de ação',
    subtitle: 'visão geral',
  });

  const [cardFive, setCardFive] = useState({
    title: 'Planos de ação',
    subtitle: 'atualizações',
  });

  const GlobalData: any = React.useContext(DataContext);

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
            <PlansOvewview />

            <Card width='small' height='large' >
              <Header settings title={cardFive.title} subtitle={cardFive.subtitle} />
              <SearchBox width='small' height='large'>
                <SearchBar />
              </SearchBox>
              <SelectBox type='large' >
                <PeriodSelect width='large' />
              </SelectBox>
            </Card>

          </SecondColumn>

        </Cards>
      </HomeContent>
    </View >
  );
};

export default Home;
