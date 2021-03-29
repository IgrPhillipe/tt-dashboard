import React from 'react';
import { Chart } from 'react-google-charts';

import { DataContext } from '../../../dataContext';

import { Header } from '../../index';

import {
  Card,
  ChartBox,
} from './style';

const DailyInspections: React.FC = () => {
  const { GlobalData: Data }: any = React.useContext(DataContext);

  return (
    <>
      <Card width='small' height='small' >
        <Header settings title='Inspeções' subtitle='Status do dia' />
        <ChartBox>
          <Chart
            width={'335px'}
            height={'250px'}
            chartType='PieChart'
            loader={<div>Loading</div>}
            data={[
              ['', '', ''],
              ['Realizados', Data.inspections.realized, 0],
              ['Não realizados', (Data.inspections.planned - Data.inspections.realized), 0],
              ['Total', Data.inspections.planned, 0],
            ]}
          />

        </ChartBox>
      </Card>
    </>
  );

};

export default DailyInspections;