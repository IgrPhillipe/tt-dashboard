import styled from 'styled-components';

import theme from '../../assets/themes';

export const Headerbox = styled.div`
  height: 15px;

  padding: 13px 16px;
`;

export const Top = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const Title = styled.h1`
  color: ${theme.mainColors.darkGray};
  font-size: ${theme.fonts.title.size};
`;

export const Subtitle = styled.p`
  color: ${theme.mainColors.textGray};
  font-size: ${theme.fonts.subtitle.size};
`;
