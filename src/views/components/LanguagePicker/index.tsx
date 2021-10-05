import { FC, useContext } from 'react';

import LanguagePicker from './LanguagePicker';
import { LanguageContext } from '../../../globalStorage/LanguageProvider';

const Wrapper: FC = () => {
  const { languageValue, languageDispatch } = useContext(LanguageContext);

  return (
    <LanguagePicker
      userLanguage={languageValue.userLanguage}
      languageDispatch={languageDispatch}
    />
  );
};

export default Wrapper;
