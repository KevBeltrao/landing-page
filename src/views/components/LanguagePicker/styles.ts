import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 30px;
  top: 5px;
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  padding: 10px;
  font-size: 1.2rem;
  color: ${({ theme, isActive }: {
      theme: { magenta: string, white: string },
      isActive: boolean,
    }) => (isActive ? theme.magenta : theme.white)};

  transition: color 0.3s, transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;
