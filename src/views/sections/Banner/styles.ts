import styled from 'styled-components';
import keyboard from './assets/keyboard.png';

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  background-image: url('${keyboard}');
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: right bottom;

  overflow: hidden;
`;

export const Content = styled.div`
  margin-left: 80px;

  @media(max-width: 900px) {
    margin: 0 30px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
  }
`;

export const Greeting = styled.span`
  display: block;
  font-weight: bold;
  font-size: 2.5rem;
  
  @media(max-width: 900px) {
    font-size: 1.8rem;
  }

    @media(max-width: 400px) {
      font-size: 1.6rem;
    }
  `;

export const Title = styled.h1`
  color: ${({ theme }) => theme.magenta};
  display: inline-block;
  font-size: 2.5rem;
  font-weight: bold;

  @media(max-width: 900px) {
    font-size: 1.8rem;
  }

  @media(max-width: 400px) {
    font-size: 1.6rem;
  }
`;

export const TextAboutVideos = styled.p`
  margin-top: 100px;
  margin-bottom: 30px;
  font-size: 1.8rem;
  max-width: 500px;
  width: 50%;

  @media(max-width: 900px) {
    margin-top: 20px;
    font-size: 1.4rem;
    width: 90%;
  }
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.magenta};
  `;

export const YoutubeLink = styled.a`
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.magenta};

  color: ${({ theme }) => theme.white} !important;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  
  padding: 10px 20px;

  transition: padding 0.3s;

  &:hover {
    padding: 11px 22px;
    box-shadow: 0 0 5px 0px ${({ theme }) => theme.magenta};
  }

  @media(max-width: 900px) {
    width: fit-content;
    padding: 8px 15px;
  }
`;
