import React from 'react';
import { Chart } from 'react-google-charts';

import { DataContext } from '../../dataContext';

import { Header, PeriodSelect } from '../index';

import {
  Card,
  ChartBox,
  SelectBox
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
      </Card>
    </>
  );

};

export default EventsHistory;