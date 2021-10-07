import { FC } from 'react';

import { DictionaryType } from '../../../languages/index';
import {
  Container,
  Avatar,
  AvatarBackground,
  Balloon,
  BalloonText,
  BalloonSubText,
  Emoji,
} from './styles';

import downPointerEmoji from './assets/downPointerEmoji.png';
import rightPointerEmoji from './assets/rightPointerEmoji.png';

interface ContactButtonProps {
  dictionary: DictionaryType;
  onClick: () => void;
  windowHeight: number;
}

const ContactButton: FC<ContactButtonProps> = ({ dictionary, onClick, windowHeight }) => {
  const heightBreakpoint = windowHeight > 700;

  return (
    <Container onClick={onClick}>
      <Balloon
        placement={heightBreakpoint ? 'top' : 'left'}
        title={(
          <BalloonText>
            <BalloonSubText>{dictionary.banner.contactBalloon[0]}</BalloonSubText>
            <BalloonSubText>
              {dictionary.banner.contactBalloon[1]}
              <Emoji
                pointerDown={heightBreakpoint}
                pointerRight={!heightBreakpoint}
                alt="pointer emoji"
                src={heightBreakpoint ? downPointerEmoji : rightPointerEmoji}
              />
            </BalloonSubText>
          </BalloonText>
        )}
      >
        <AvatarBackground />
        <Avatar />
      </Balloon>
    </Container>
  );
};

export default ContactButton;
