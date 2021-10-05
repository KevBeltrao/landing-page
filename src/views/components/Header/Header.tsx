import { FC } from 'react';

import instagram from './assets/instagram.svg';
import linkedin from './assets/linkedin.svg';
import github from './assets/github.svg';

import {
  Container,
  Logo,
  SocialContainer,
  SocialLink,
  SocialIcon,
} from './styles';

const Banner: FC = () => (
  <Container>
    <Logo />

    <SocialContainer>
      <SocialLink href="https://www.instagram.com/kevbeltrao/" target="_blank">
        <SocialIcon src={instagram} alt="instagram" />
      </SocialLink>

      <SocialLink href="https://www.linkedin.com/in/kbmelo/" target="_blank">
        <SocialIcon src={linkedin} alt="linkedin" />
      </SocialLink>

      <SocialLink href="https://github.com/kbmelo/" target="_blank">
        <SocialIcon src={github} alt="github" />
      </SocialLink>
    </SocialContainer>
  </Container>
);

export default Banner;
