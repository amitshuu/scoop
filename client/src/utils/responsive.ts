import { css } from 'styled-components';
import CSS from 'csstype';

export const mobile = (props: any) => {
  return css`
    @media only screen and (max-width: 992px) {
      ${props}
    }
  `;
};
