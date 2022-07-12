import { createGlobalStyle } from 'styled-components';

import MyriadRegular from './fonts/MYRIADPRO-REGULAR.otf';

export default createGlobalStyle`

    @font-face {
        font-family: 'MyriadRegular';
        src: local('Font Name'), local('FontName'),
        url(${MyriadRegular}) format('opentype');
    
    }
`;
