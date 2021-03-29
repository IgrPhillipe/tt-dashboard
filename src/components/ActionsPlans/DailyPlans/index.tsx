import React from 'react';
import { Chart } from 'react-google-charts';

import theme from '../../../assets/themes';

import { DataContext } from '../../../dataContext';

import { Header, ChartLegend } from '../../index';

import {
  Card,
  ChartBox,
  Legend
} from './style';

const DailyPlans: React.FC = () => {
  const { GlobalData: Data }: any = React.useContext(DataContext);

  return (
    <>
      <Card width='small' height='small' >
        <Header settings title='Planos de Ação' subtitle='Status do dia' />
        <ChartBox>
          <Chart
            options={{
              legend: 'none',
              colors: [`${theme.mainColors.green}`, `${theme.mainColors.red}`, `${theme.mainColors.orange}`]
            }}
            width={'270px'}
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
        <Legend>
          <ChartLegend legend='Realizados' value='40' color='green' />
          <ChartLegend legend='Não realizados' value='50' color='red' />
          <ChartLegend legend='Total' value='10' color='orange' />
        </Legend>
      </Card>
    </>
  );

};

export default DailyPlans;