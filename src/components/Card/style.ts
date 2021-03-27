import styled from 'styled-components';

import theme from '../../assets/themes';

type CardProps = {
  width: string;
  height: string;
};

export const Cardbox = styled.div<CardProps>`
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
`;

export const Header = styled.div`
  height: 15px;

  margin: 13px 16px;

`;
