import React from 'react';
import { Chart } from 'react-google-charts';

import theme from '../../assets/themes/index';

import { DataContext } from '../../dataContext';

import { Header, PeriodSelect, ChartLegend } from '../index';

import {
  Card,
  ChartBox,
  SelectBox,
  Legend
} from './style';

const EventsHistory: React.FC = () => {
  const GlobalData: any = React.useContext(DataContext);

  return (
    <>
      <Card width='large' height='small' >
        <Header settings title='Histórico de Eventos' />
        <SelectBox>
          <PeriodSelect width='small' />
        </SelectBox>
        <ChartBox>
          <Chart
            options={{
              legend: 'none',
              colors: [`${theme.mainColors.green}`, `${theme.mainColors.red}`, `${theme.mainColors.orange}`]
            }}
            width={'720px'}
            height={'250px'}
            chartType='ColumnChart'
            loader={<div>Loading</div>}
            data={[
              ['', '', ''],
              ['Segunda', GlobalData.GlobalData.inspections.total.monday, GlobalData.GlobalData.plans.total.monday],
              ['Terça', GlobalData.GlobalData.inspections.total.tuesday, GlobalData.GlobalData.plans.total.tuesday],
              ['Quarta', GlobalData.GlobalData.inspections.total.wednesday, GlobalData.GlobalData.plans.total.wednesday],
              ['Quinta', GlobalData.GlobalData.inspections.total.thursday, GlobalData.GlobalData.plans.total.thursday],
              ['Sexta', GlobalData.GlobalData.inspections.total.sunday, GlobalData.GlobalData.plans.total.sunday],
            ]}
          />
        </ChartBox>
        <Legend>
          <ChartLegend legend='Inspeções realizadas' color='green' />
          <ChartLegend legend='Planos de Ação criados' color='orange' />
        </Legend>
      </Card>
    </>
  );

};

export default EventsHistory;