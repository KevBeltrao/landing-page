import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div``;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;

    background: #020154;
    color: #fefefe;
  }

  body, input, button {
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }

  @media(max-width: 450px) {
    @media(max-height: 700px) {
      .ant-tooltip {
        display: none !important;
      }
    }
  }

  .ant-form-item-has-error :not(.ant-input-disabled):not(.ant-input-borderless).ant-input, .ant-form-item-has-error :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper, .ant-form-item-has-error :not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover, .ant-form-item-has-error :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover {
    background-color: #f5f5ff;
    box-shadow: 0 0 3px 1px #cd428d;
  }

  .ant-tooltip {
    z-index: 999 !important;
  }

  .ant-message-notice {
    color: #020154;
  }
`;

export const theme = {
  magenta: '#cd428d',
  magentaFilter: 'invert(56%) sepia(59%) saturate(5359%) hue-rotate(301deg) brightness(83%) contrast(92%)',
  blue: '#020154',
  darkBlue: '#160339',
  gray: '#6d6e70',
  lightGray: '#b1b2b4',
  white: '#fefefe',
  whiteFilter: 'invert(96%) sepia(96%) saturate(17%) hue-rotate(293deg) brightness(104%) contrast(103%)',
  inputBackground: '#f5f5ff',
  borderRadius: '10px',
};
