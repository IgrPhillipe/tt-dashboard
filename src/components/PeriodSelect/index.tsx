import React from 'react';

import {
  Selectbox, Select,
} from './style';

type SelectProps = {
  width: string;
}

const PeriodSelect: React.FC<SelectProps> = ({
  width,
}: SelectProps) => {
  return (
    <>
      <Selectbox>
        <Select width={width}>
          <option>Diário</option>
          <option>Semanal</option>
          <option>Mensal</option>
        </Select>
      </Selectbox>

    </>
  );
};

export default PeriodSelect;
