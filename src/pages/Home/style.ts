import styled from 'styled-components';

import theme from '../../assets/themes';

type SideBarProps = {
  hide: boolean;
}

type CardProps = {
  width: string;
  height: string;
};

type SelectProps = {
  type: string;
}

export const View = styled.div`
  width: 90vw;
  height: 100vh;

  position: absolute;

  display: flex;
  flex-direction: row;
`;

export const BarFunctions = styled.div<SideBarProps>`
  width: ${({ hide }) => (hide ? '40px' : '220px')};
  height: 150vh;

  position: relative;

  transition: 0.5s;

  margin: 0;
`;

export const HomeContent = styled.div<SideBarProps>`
  padding: 10px 0 10px 0;

  transition: 0.5s;

  position: relative;
`;

export const Title = styled.h1`
  color: ${theme.mainColors.darkGray};
  font-size: ${theme.fonts.h1};

  margin-left: 18px;
`;

export const Dock = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;

  top: 0;
  left: 0;

  width: 40px;
  height: 150vh;

  background: linear-gradient(180deg, #0DB2D6 8.12%, #4FDA91 71.62%);
`;

export const MenuButton = styled.div`
  position: absolute;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  top: 80px;

  width: 45px;
  height: 45px;

  border-radius: 30px;

  background-color: ${theme.mainColors.lightGray};

  &:hover {
    background-color: #E4E4E4;
  }
`;

export const SideBar = styled.div<SideBarProps>`
  position: relative;

  margin-left: 40px;

  width: ${({ hide }) => (hide ? 0 : '180px')};
  height: 100%;

  z-index: 1;
  top: 0;
  left: 0;

  overflow-x: hidden;

  transition: 0.5s;

  border-right: 1px solid #EBEBEB;
`;

export const Cards = styled.div`
  display: flex;
`;

export const FirstColumm = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 810px;
`;

export const SecondColumn = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

height: 1055px;
`;

export const Card = styled.div<CardProps>`
  width: ${({ width }) => (width === 'small' ? theme.cards.width.small : theme.cards.width.large)};
  height: ${({ height }) => (height === 'small' ? theme.cards.height.small : theme.cards.height.large)};

  background-color: ${theme.mainColors.white};

  border-radius: ${theme.borderRadius.card};
  border-color:  0.5px solid #E4E4E4;

  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);

  margin-top: ${theme.margins.top};
  margin-bottom: ${theme.margins.bottom};
  margin-left: ${theme.margins.left};
  margin-right: ${theme.margins.right};

  position: relative;
`;

export const SelectBox = styled.div<SelectProps>`
  position: ${({ type }) => type === 'small' && 'absolute'};

  display: flex;
  justify-content: center;
  align-items: center;

  top: ${({ type }) => type === 'small' ? '15px' : '80px'};
  right: ${({ type }) => type === 'small' && 0};

  margin-right: ${({ type }) => type === 'small' && '15px'};
`;

export const SearchBox = styled.div<CardProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 5px 0;

  width: ${({ width }) => (width === 'small' ? theme.cards.width.small : theme.cards.width.large)};
`;

export const ChartBox = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  justify-content: center;
  align-items: center;
`;