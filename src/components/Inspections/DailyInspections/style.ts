import styled from 'styled-components';

import theme from '../../../assets/themes';

type CardProps = {
  width: string;
  height: string;
};

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

export const ChartBox = styled.div`
  height: 80%;

  padding-top: 20px;

  position: absolute;

  left: 0px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Legend = styled.div`
  position: absolute;

  top: 130px;
  left: 250px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 100px;
`;
