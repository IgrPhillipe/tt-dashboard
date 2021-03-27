import React from 'react';

import {
  Cardbox
} from './style';

import Header from '../Header';

export interface CardProps {
  width: string;
  height: string;
}

const Card: React.FC<CardProps> = ({
  width, height,
}: CardProps) => {
  return (
    <>
      <Cardbox width={width} height={height} >
        <Header />
      </Cardbox>
    </>
  );
};

export default Card;
