import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    min-height: 100%;
  }
  body {
    background: ${(props) => props.theme.colors.container};
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fontFamily.sidebar};
    /* padding: 1rem; */
    box-sizing: border-box;

    ::-webkit-scrollbar{
      width: 15px;
    }

    ::-webkit-scrollbar-track{
      background: ${({ theme }) => theme.colors.black};
    }

    ::-webkit-scrollbar-thumb{
      background: ${({ theme }) => theme.colors.gray500};
      border-radius: 3rem;
    }

    *::selection{
      color: ${({ theme }) => theme.colors.white};
      background: rgba(55, 48, 163, 1);
    }
  }
`;
