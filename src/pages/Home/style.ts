import styled from 'styled-components';

import theme from '../../assets/themes';

type SideBarProps = {
  hide: boolean;
}

export const View = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Dock = styled.div`
  position: absolute;

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
  position: absolute;

  display: ${({ hide }) => (hide ? 'none' : 'block')};

  margin-left: 40px;

  width: 170px;
  height: 100vh;

  border-right: 1px solid #EBEBEB;
`;

