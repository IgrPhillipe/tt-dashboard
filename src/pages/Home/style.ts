import styled from 'styled-components';

import theme from '../../assets/themes';

type SideBarProps = {
  hide: boolean;
}

export const View = styled.div`
  display: flex;
  justify-content: flex-start;

  width: 90vw;
  height: 330vh;
`;

export const BarFunctions = styled.div<SideBarProps>`
  width: ${({ hide }) => (hide ? '40px' : '220px')};
  height: 100%;

  position: relative;

  transition: 0.5s;

  margin-right: 30px;
`;

export const HomeContent = styled.div<SideBarProps>`
  padding: 10px 0 10px 0;

  width: 100%;

  transition: 0.5s;

  margin-left: 30px;
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
  height: 100%;

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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;

  width: 100%;
`;

export const FirstColumm = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: 810px;
`;

export const SecondColumn = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

height: 1055px;
`;
