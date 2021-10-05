import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 20px;
  top: 10px;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  font-size: 1.2rem;
  margin-left: 10px;
  color: ${({ theme, isActive }: {
      theme: { magenta: string, white: string },
      isActive: boolean,
    }) => (isActive ? theme.magenta : theme.white)};

  transition: color 0.3s, transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;
