import React from 'react';

import { DataContext } from '../../../dataContext';

import Header from '../../Header/index';
import PeriodSelect from '../../PeriodSelect/index';
import SearchBar from '../../SearchBar/intex';

import {
  Card, SelectBox, SearchBox, Table, TableLegend, Name, Planned, Realized, LastUpdate, TableItem, NameItem, PlannedItem, RealizedItem, LastUpdateItem
} from './style';

const ScheduledInspections: React.FC = () => {
  const { GlobalData: Data }: any = React.useContext(DataContext);

  return (
    <>
      <Card width='large' height='small'  >
        <Header title='Inspeções agendadas' />

        <SelectBox type='small'>
          <PeriodSelect width='small' />
        </SelectBox>
        <SearchBox width='large' height='small'>
          <SearchBar />
        </SearchBox>

        <Table>
          <TableLegend>
            <Name><p>NOME</p></Name>
            <Planned><p>PLANEJADO</p></Planned>
            <Realized><p>REALIZADO</p></Realized>
            <LastUpdate><p>ÚLTIMA ATUALIZAÇÃO</p></LastUpdate>
          </TableLegend>

          {
            Data.inspections.data.map((inspection: any) => {
              let planned = 0;
              let realized = 0;
              let last = [''];
              let nullInspection = false;

              if (inspection.inspections.length < 1) {
                nullInspection = true;
              }
              inspection.inspections.map((item: { planned: boolean; realized: boolean; last_update: string; }) => {
                if (item.planned === true) {
                  planned += 1;
                }
                if (item.realized === true) {
                  realized += 1;
                }

                const aux = item.last_update.split(' ');
                last = aux.slice(1, 5);

              });
              return (
                <TableItem key={inspection.name}>
                  <NameItem><p>{inspection.name}</p></NameItem>
                  <PlannedItem>
                    <p>
                      {
                        nullInspection ? '' : `${planned}`
                      }
                    </p>
                  </PlannedItem>
                  <RealizedItem>
                    <p>
                      {
                        nullInspection ? '' : `${realized}`
                      }
                    </p>
                  </RealizedItem>
                  <LastUpdateItem><p>
                    {
                      nullInspection ? '' : `${last[1]}/${last[0]}/${last[2]} - ${last[3]}`
                    }
                  </p></LastUpdateItem>
                </TableItem>
              );
            })
          }


        </Table>


      </Card>
    </>
  );

};

export default ScheduledInspections;