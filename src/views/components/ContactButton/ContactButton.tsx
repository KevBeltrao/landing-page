import { FC } from 'react';

import { DictionaryType } from '../../../languages/index';
import {
  Container,
  Avatar,
  Balloon,
  BalloonText,
  BalloonSubText,
} from './styles';

interface ContactButtonProps {
  dictionary: DictionaryType;
  onClick: () => void;
  windowHeight: number;
}

const ContactButton: FC<ContactButtonProps> = ({ dictionary, onClick, windowHeight }) => (
  <Container onClick={onClick}>
    <Balloon
      placement={windowHeight > 700 ? 'top' : 'left'}
      title={(
        <BalloonText>
          <BalloonSubText>{dictionary.banner.contactBalloon[0]}</BalloonSubText>
          {' '}
          <BalloonSubText>{dictionary.banner.contactBalloon[1]}</BalloonSubText>
        </BalloonText>
      )}
    >
      <Avatar />
    </Balloon>
  </Container>
);

export default ContactButton;
