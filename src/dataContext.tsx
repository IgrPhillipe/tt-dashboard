import React, { useState, createContext } from 'react';

import { inspections } from './data.json';

export const DataContext = createContext({});

export const DataProvider = (props: any) => {
  let countPlanned = 0;
  let countRealized = 0;
  let monday = 0;
  let tuesday = 0;
  let wednesday = 0;
  let thursday = 0;
  let sunday = 0;

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

  const GlobalData = {
    data: inspections,
    planned: countPlanned,
    realized: countRealized,
    inspections: {
      monday: monday,
      tuesday: tuesday,
      wednesday: wednesday,
      thursday: thursday,
      sunday: sunday
    }
  };

  return (
    <DataContext.Provider value={{ GlobalData }} >
      {props.children}
    </DataContext.Provider>
  );
};