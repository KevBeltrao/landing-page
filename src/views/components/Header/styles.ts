import styled from 'styled-components';

import logo from './assets/logo.png';

export const Container = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  padding: 50px 80px;
  
  @media(max-width: 900px) {
    justify-content: center;
    padding: 35px 50px;
  }
`;

export const Logo = styled.img.attrs({ src: logo })`
  width: 60px;

  @media(max-width: 900px) {
    width: 50px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;

  @media(max-width: 900px) {
    flex-direction: column;
    position: absolute;
    right: 20px;
    top: 0;
    height: 100vh;
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
  margin-left: 40px;

  @media(max-width: 900px) {
    margin: 20px 0;
  }
`;

export const SocialIcon = styled.img`
  width: 40px;
  cursor: pointer;
  filter: ${({ theme }) => theme.whiteFilter};

  transition: 0.3s filter;
  
  &:hover {
    filter: ${({ theme }) => theme.magentaFilter};
  }

  @media(max-width: 900px) {
    width: 30px;
  }
`;
