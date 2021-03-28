import React from 'react';
import { Settings } from 'react-feather';

import {
  Headerbox,
  Top,
  Title,
  Subtitle
} from './style';

export interface HeaderProps {
  settings?: boolean;
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({
  settings, title, subtitle,
}: HeaderProps) => {
  return (
    <>
      <Headerbox>
        <Top>
          <Title>{title}</Title>
          {settings && (
            <Settings cursor='pointer' onClick={() => console.log('click')} />
          )}

        </Top>
        {subtitle && (
          <Subtitle>{subtitle}</Subtitle>
        )}
      </Headerbox>
    </>
  );
};

export default Header;