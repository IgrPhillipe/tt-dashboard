import { createGlobalStyle } from 'styled-components';
import theme from './index';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    body {
        background: ${theme.mainColors.lightGray};
        font-family: 'Poppins', sans-serif;
    }
`;
