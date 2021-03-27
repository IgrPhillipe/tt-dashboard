import styled from 'styled-components';

import theme from '../../assets/themes';

type SideBarProps = {
  hide: boolean;
}

export const View = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
`;

export const BarFunctions = styled.div`
  width: 210px;

  margin: 0;

`;

export const HomeContent = styled.div`
  padding: 10px;
`;

export const Title = styled.h1`
  color: ${theme.mainColors.darkGray};
  font-size: ${theme.fonts.h1};

  margin-left: 18px;
`;

export const Dock = styled.div`
  position: fixed;

  display: flex;
  justify-content: center;

  top: 0;
  left: 0;

  width: 40px;
  height: 100vh;

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
  display: ${({ hide }) => (hide ? 'none' : 'fixed')};

  margin-left: 40px;

  width: 170px;
  border-right: 1px solid #EBEBEB;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
