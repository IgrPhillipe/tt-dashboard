import React from 'react';
import { Chart } from 'react-google-charts';

import { DataContext } from '../../../dataContext';

import Header from '../../Header/index';

import {
  Card, ChartBox,
} from './style';

const PlansOverview: React.FC = () => {
  const { GlobalData: Data }: any = React.useContext(DataContext);

  return (
    <>
      <Card width='small' height='small' >
        <Header settings title='Planos de Ação' subtitle='Visão Geral' />
        <ChartBox>
          <Chart
            width={'335px'}
            height={'250px'}
            chartType='PieChart'
            loader={<div>Loading</div>}
            data={[
              ['', '', ''],
              ['Realizados', Data.plans.closed, 0],
              ['Não realizados', Data.plans.open, 0],
              ['Total', (Data.plans.open + Data.plans.closed), 0],
            ]}
          />

        </ChartBox>
      </Card>
    </>
  );

};

export default PlansOverview;