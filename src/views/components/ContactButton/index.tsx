import { FC, useContext } from 'react';

import ContactButton from './ContactButton';
import { LanguageContext } from '../../../globalStorage/LanguageProvider';

interface WrapperProps {
  onClick: () => void;
}

const Wrapper: FC<WrapperProps> = ({ onClick }) => {
  const { languageValue } = useContext(LanguageContext);

  return (
    <ContactButton dictionary={languageValue.dictionary} onClick={onClick} />
  );
};

export default Wrapper;
