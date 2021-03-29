import styled from 'styled-components';

type TagProps = {
  status: string;
}

export const TagBox = styled.div<TagProps>`
  width: 75px;
  height: 20px;

  border-radius: 30px;
  border: 3px solid;
  border-color: ${({ status }) => (status === 'REALIZADO' ? '#7FC008' : '#DB8C28')};
  box-sizing: border-box;

  color: ${({ status }) => (status === 'REALIZADO' ? '#7FC008' : '#DB8C28')};

  display: flex;
  justify-content: center;
  align-items: center;
`;
