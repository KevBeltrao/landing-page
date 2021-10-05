import { FC, useContext } from 'react';

import { useWindowSize } from '../../../customHooks';
import ContactButton from './ContactButton';
import { LanguageContext } from '../../../globalStorage/LanguageProvider';

interface WrapperProps {
  onClick: () => void;
}

const Wrapper: FC<WrapperProps> = ({ onClick }) => {
  const { languageValue } = useContext(LanguageContext);
  const { windowHeight } = useWindowSize();

  return (
    <ContactButton
      dictionary={languageValue.dictionary}
      onClick={onClick}
      windowHeight={windowHeight}
    />
  );
};

export default Wrapper;
