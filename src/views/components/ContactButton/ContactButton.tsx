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
}

const ContactButton: FC<ContactButtonProps> = ({ dictionary, onClick }) => (
  <Container onClick={onClick}>
    <Balloon
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
