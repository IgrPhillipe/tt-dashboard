import React from 'react';

import {
  Cardbox
} from './style';

import Header from '../Header';

export interface CardProps {
  width: string;
  height: string;
  settings?: boolean;
  title: string;
  subtitle?: string;
}

const Card: React.FC<CardProps> = ({
  width, height, settings, title, subtitle
}: CardProps) => {
  return (
    <>
      <Cardbox width={width} height={height} >
        <Header title={title} subtitle={subtitle} settings={settings} />
      </Cardbox>
    </>
  );
};

export default Card;
