import React from 'react';

import {
  TagBox
} from './style';

export interface TagProps {
  name: string;
  status: string;
}

const Tag: React.FC<TagProps> = ({
  name, status
}: TagProps) => {
  return (
    <>
      <TagBox status={status}>{name}</TagBox>
    </>
  );
};

export default Tag;