import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --text-color: #121416d8;
    --link-color: #543fd7;
    --background-color: #fff;
    --alternate-background-color: #f7f7f9;
    --primary-color: #fbf11f;
    --primary-colorPressed: #eff32c;
  
    /* Global colors */
    --color-white: #fff;
    --color-dark: #212a2e;
    --color-blue-iris: #543fd7;
  }

  html[data-theme='light'] {
    --text-color: #121416d8;
    --link-color: #543fd7;
    --background-color: #fff;
    --alternate-background-color: #f7f7f9;
  }

  html[data-theme='dark'] {
    --text-color: #f7f8f8;
    --link-color: #828fff;
    --background-color: #212a2e;
    --alternate-background-color: #1a2327;
  }

  ${css`
    @custom-media --xs-viewport (max-width: 599px);
    @custom-media --s-viewport (max-width: 767px);
    @custom-media --m-viewport (max-width: 1023px);
    @custom-media --l-viewport (max-width: 1439px);
    @custom-media --xl-viewport (max-width: 1919px);
  `}
`
