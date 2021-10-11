import { FC } from 'react';

import Header from '../../components/Header';
import { DictionaryType } from '../../../languages/index';
import {
  Container,
  Content,
  Greeting,
  Title,
  TextAboutVideos,
  Highlight,
  YoutubeLink,
} from './styles';

import ContactButton from '../../components/ContactButton';
import Modal from '../../components/Modal';
import LanguagePicker from '../../components/LanguagePicker';

interface BannerProps {
  shouldContactModalShow: boolean;
  setShouldContactModalShow: (value: boolean) => void;
  dictionary: DictionaryType;
}

const Banner: FC<BannerProps> = ({
  shouldContactModalShow,
  setShouldContactModalShow,
  dictionary,
}) => {
  const { banner: bannerText } = dictionary;

  return (
    <Container>
      <LanguagePicker />

      <Header />

      <Content>
        <Greeting>{bannerText.title.greet}</Greeting>

        <Greeting>
          {bannerText.title.introduce[0]}
          {' '}
          <Title>{bannerText.title.introduce[1]}</Title>
        </Greeting>

        <TextAboutVideos>
          {bannerText.youtube[0]}
          {' '}
          <Highlight>{bannerText.youtube[1]}</Highlight>
        </TextAboutVideos>

        <YoutubeLink href="https://youtube.com/kevbeltrao" target="_blank">
          Youtube
        </YoutubeLink>
      </Content>

      <ContactButton onClick={() => setShouldContactModalShow(true)} />

      <Modal
        visible={shouldContactModalShow}
        closeModal={() => setShouldContactModalShow(false)}
      />
    </Container>
  );
};

export default Banner;
