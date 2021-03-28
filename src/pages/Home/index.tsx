import React, { useState } from 'react';
import { Menu, BarChart } from 'react-feather';

import Card from '../../components/Card/index';
import SideBarItem from '../../components/SideBarItem/index';

import {
  View, BarFunctions, HomeContent, Title, Dock, MenuButton, SideBar, Cards, FirstColumm, SecondColumn,
} from './style';

const Home: React.FC = () => {
  const [hide, setHide] = useState(false);

  const [cardOne, setCardOne] = useState({
    title: 'Histórico de eventos',
  });

  const [cardTwo, setCardTwo] = useState({
    title: 'Planos de ação',
    subtitle: 'visão geral',
  });

  const [cardThree, setCardThree] = useState({
    title: 'Inspeções',
    subtitle: 'status do dia',
  });

  const [cardFour, setCardFour] = useState({
    title: 'Plano de ação',
    subtitle: 'status do dia',
  });

  const [cardFive, setCardFive] = useState({
    title: 'Planos de ação',
    subtitle: 'atualizações',
  });

  const [cardSix, setCardSix] = useState({
    title: 'Inspeções agendadas',
  });

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
            <Card width='large' height='small' settings title={cardOne.title} />
            <Card width='small' height='small' settings title={cardThree.title} subtitle={cardThree.subtitle} />
            <Card width='small' height='small' settings title={cardFour.title} subtitle={cardFour.subtitle} />
            <Card width='large' height='small' title={cardSix.title} />
          </FirstColumm>
          <SecondColumn>
            <Card width='small' height='small' settings title={cardTwo.title} subtitle={cardTwo.subtitle} />
            <Card width='small' height='large' settings title={cardFive.title} subtitle={cardFive.subtitle} />
          </SecondColumn>
        </Cards>
      </HomeContent>
    </View>
  );
};

export default Home;
