import { FC, useState, useContext } from 'react';

import Banner from './Banner';
import { LanguageContext } from '../../../globalStorage/LanguageProvider';

const Wrapper: FC = () => {
  const [shouldContactModalShow, setShouldContactModalShow] = useState(false);
  const { languageValue } = useContext(LanguageContext);

  return (
    <Banner
      shouldContactModalShow={shouldContactModalShow}
      setShouldContactModalShow={setShouldContactModalShow}
      dictionary={languageValue.dictionary}
    >
      <h1>Salve</h1>
    </Banner>
  );
};

export default Wrapper;
