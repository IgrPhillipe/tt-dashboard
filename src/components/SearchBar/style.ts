import styled from 'styled-components';

import theme from '../../assets/themes';

export const Input = styled.input`
  width: 100%;
  height: 34px;

  background-color: ${theme.mainColors.lightGray};

  margin: 15px;

  border: 1px solid ${theme.mainColors.secondaryGray};
  border-radius: ${theme.borderRadius.input};
  outline: none;

  font-weight: bold;

  padding: 0 10px;
`;

export const IconBox = styled.button`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  border: none;
  outline: none;

  right: 30px;
`;