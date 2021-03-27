import styled from 'styled-components';

import theme from '../../assets/themes';

export const Box = styled.div`
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 60px;

  cursor: pointer;

  &:hover {
    background-color: #E4E4E4;
  }

`;

export const Title = styled.h2`
  color: #0794B2;
  font-size: ${theme.fonts.subtitle.size};

  margin-left: 5px;
`;
