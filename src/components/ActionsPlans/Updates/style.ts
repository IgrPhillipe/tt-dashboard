import styled from 'styled-components';

import theme from '../../../assets/themes';

type CardProps = {
  width: string;
  height: string;
};

type SelectProps = {
  type: string;
}

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

export const Table = styled.div`
  margin-bottom: 25px;
`;

export const TableItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  font-size: ${theme.fonts.subtitle.size};

  margin: 10px 15px;

  border-bottom: 0.5px solid ${theme.mainColors.secondaryGray};
`;

export const Top = styled.div`
  width: 100%;
  height: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 5px 0;  
`;

export const Bottom = styled.div`
  width: 100%;
  height: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  margin: 5px 0;
`;

export const Title = styled.h1`
  font-size: ${theme.fonts.subtitle.size};
  color: ${theme.mainColors.darkGray};
`;

export const Subtitle = styled.p`
  font-size: ${theme.fonts.subtitle.size};
  color: ${theme.mainColors.textGray};
`;