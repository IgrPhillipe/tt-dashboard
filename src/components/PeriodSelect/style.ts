import styled from 'styled-components';

import theme from '../../assets/themes';

type InputProps = {
  width: string;
};

export const Selectbox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Select = styled.select<InputProps>`
  width: ${({ width }) => (width === 'small' ? '240px' : '345px')};
  height: 28px;
  
  border: none;
  border-radius: ${theme.borderRadius.input};
  outline: none;

  background-color: ${theme.mainColors.mediumGray};

  padding: 0 10px;

  font-weight: bold;

  color: ${theme.mainColors.darkGray};
  
  cursor: pointer;
`;
