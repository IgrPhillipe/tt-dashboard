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

const DailyInspections: React.FC = () => {
  const { GlobalData: Data }: any = React.useContext(DataContext);

  return (
    <>
      <Card width='small' height='small' >
        <Header settings title='Inspeções' subtitle='Status do dia' />
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
              ['Realizados', Data.inspections.realized, 0],
              ['Não realizados', (Data.inspections.planned - Data.inspections.realized), 0],
              ['Total', Data.inspections.planned, 0],
            ]}
          />
        </ChartBox>
        <Legend>
          <ChartLegend legend='Realizados' color='green' />
          <ChartLegend legend='Não realizados' color='red' />
          <ChartLegend legend='Total' color='orange' />
        </Legend>
      </Card>
    </>
  );

};

export default DailyInspections;