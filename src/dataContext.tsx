import React, { useState, createContext } from 'react';

import { inspections } from './data.json';

export const DataContext = createContext({});

export const DataProvider = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  const [data, setData] = useState(inspections);
  const [planned, setPlanned] = useState();
  const [realized, setRealized] = useState();

  let countPlanned = 0;
  let countRealized = 0;

  inspections.forEach((person) => {
    person.inspections.forEach((inspection) => {
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
    realized: countRealized
  };

  return (
    <DataContext.Provider value={{ GlobalData }} >
      {props.children}
    </DataContext.Provider>
  );
};