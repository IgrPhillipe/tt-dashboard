/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { createContext } from 'react';

import { inspections, plans } from './data.json';

export const DataContext = createContext({});

export const DataProvider = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  let countPlanned = 0;
  let countRealized = 0;
  let countOpened = 0;
  let countClosed = 0;
  let monday = 0;
  let tuesday = 0;
  let wednesday = 0;
  let thursday = 0;
  let sunday = 0;

  const Inspections = () => {
    inspections.forEach((person) => {
      person.inspections.forEach((inspection) => {
        const date = inspection.last_update.split(' ');

        switch (date[0]) {
          case 'Mon': {
            monday += 1;
            break;
          }
          case 'Tue': {
            tuesday += 1;
            break;
          }
          case 'Wed': {
            wednesday += 1;
            break;
          }
          case 'Thu': {
            thursday += 1;
            break;
          }
          default: {
            sunday += 1;
            break;
          }
        }

        if (inspection.planned === true) {
          countPlanned += 1;
        }
        if (inspection.realized === true) {
          countRealized += 1;
        }
      });
    });

    return {
      monday: monday,
      tuesday: tuesday,
      wednesday: wednesday,
      thursday: thursday,
      sunday: sunday
    };
  };

  const totalInspections = Inspections();

  const Plans = () => {
    plans.forEach((plan) => {
      const date = plan.Date.split('/');

      switch (date[0]) {
        case '22': {
          monday += 1;
          break;
        }
        case '23': {
          tuesday += 1;
          break;
        }
        case '24': {
          wednesday += 1;
          break;
        }
        case '25': {
          thursday += 1;
          break;
        }
        default: {
          sunday += 1;
          break;
        }
      }

      if (plan.status === 'PENDENTE') {
        countClosed += 1;
      } else {
        countOpened += 1;
      }
    });

    return {
      monday: monday,
      tuesday: tuesday,
      wednesday: wednesday,
      thursday: thursday,
      sunday: sunday
    };
  };

  const totalPlans = Plans();

  const GlobalData = {
    inspections: {
      data: inspections,
      planned: countPlanned,
      realized: countRealized,
      total: totalInspections
    },
    plans: {
      data: plans,
      open: countOpened,
      closed: countClosed,
      total: totalPlans
    }
  };

  return (
    <DataContext.Provider value={{ GlobalData }} >
      {props.children}
    </DataContext.Provider>
  );
};