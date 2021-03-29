import React from 'react';

export interface ChartProps {
  legend: string;
  value?: string;
  color: string;
}

import {
  LegendBox, Ball, Legend
} from './style';

const ChartLegend: React.FC<ChartProps> = ({
  legend, color, value
}: ChartProps) => {
  return (
    <LegendBox>
      <Ball color={color} />

      { value ?
        (<Legend>{`${legend} - ${value}%`}</Legend>) :
        (<Legend>{legend}</Legend>)
      }
    </LegendBox>

  );
};

export default ChartLegend;