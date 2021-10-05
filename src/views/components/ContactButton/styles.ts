import styled, { keyframes } from 'styled-components';
import { Tooltip } from 'antd';

import avatar from './assets/avatar.png';

const waves = keyframes`
  0% {transform:scale(0.6); }
  50% {transform:scale(0.9); opacity:1;}
  100% {transform:scale(1.1); opacity:0;}
`;

export const Container = styled.button`
  position: absolute;
  right: 100px;
  bottom: 50px;
  background: transparent;
  border: 0;
  outline: none;

  display: grid;
  place-items: center;
  overflow: hidden;

  &:before,
  &:after {
    content:'';
    position:absolute;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.magenta};
    box-shadow: 0 0 5px 0 ${({ theme }) => theme.magenta};
  }

  &:before {
    animation: ${waves} 2s linear infinite;
  }
  &:after {
    animation: ${waves} 2s linear 1s infinite;
  }

  transition: transform 0.3s;

  &:hover {
    transform: scale(1.08);
  }

  @media(max-width: 900px) {
    bottom: 0;
    right: 0;
  }
`;

export const Avatar = styled.img.attrs({ src: avatar })`
  width: 200px;
  position: relative;
  z-index: 1;

  @media(max-width: 900px) {
    width: 150px;
  }
`;

export const Balloon = styled(Tooltip).attrs(({ theme }) => ({
  color: theme.white,
  visible: true,
}))`
  display: grid;
  place-items: center;
`;

export const BalloonText = styled.p`
  color: ${({ theme }) => theme.blue};
  font-weight: 600;
  margin: 5px 10px;
`;

export const BalloonSubText = styled.span`
  white-space: nowrap;
`;
