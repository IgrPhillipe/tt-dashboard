import styled from 'styled-components';

import theme from '../../assets/themes/index';

type ChartProps = {
  color: string;
}

export const LegendBox = styled.div`
  width: 220px;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Ball = styled.div<ChartProps>`
  width: 6px;
  height: 6px;

  border-radius: 10px;
  border: 4px solid;
  border-color: ${({ color }) => (color === 'green' ? `${theme.mainColors.green}` : color === 'red' ? `${theme.mainColors.red}` : `${theme.mainColors.orange}`)};

  margin-right: 5px;
`;

export const Legend = styled.h1`
  width: 200px;
  font-size: ${theme.fonts.legend.size};
  font-weight: lighter;
`;