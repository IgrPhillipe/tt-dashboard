import React from 'react';

import { DataContext } from '../../../dataContext';

import Header from '../../Header/index';
import PeriodSelect from '../../PeriodSelect/index';
import SearchBar from '../../SearchBar/intex';
import Tag from '../../Tag/index';

import {
  Card, SelectBox, SearchBox, Table, TableItem, Top, Bottom, Title, Subtitle
} from './style';

const PlansUpdates: React.FC = () => {
  const { GlobalData: Data }: any = React.useContext(DataContext);

  return (
    <>
      <Card width='small' height='large' >
        <Header settings title='Planos de Ação' subtitle='Atualizações' />
        <SearchBox width='small' height='large'>
          <SearchBar />
        </SearchBox>
        <SelectBox type='large' >
          <PeriodSelect width='large' />
        </SelectBox>

        <Table>
          {
            Data.plans.data.map((plan: any) => {
              console.log(plan);
              return (
                <TableItem key={plan.name}>
                  <Top>
                    <Title>{plan.name}</Title>
                    <Tag status={plan.status} name={plan.status} />
                  </Top>
                  <Bottom>
                    <Subtitle>{`Responsável: ${plan.responsible}`}</Subtitle>
                    <Subtitle>{plan.Date}</Subtitle>
                  </Bottom>
                </TableItem>
              );
            })
          }
        </Table>
      </Card>
    </>
  );

};

export default PlansUpdates;