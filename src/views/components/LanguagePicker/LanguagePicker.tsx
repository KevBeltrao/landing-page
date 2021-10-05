import { FC, Dispatch } from 'react';

import { DispatchType } from '../../../globalStorage/LanguageProvider';
import { availableOptions } from '../../../languages/index';
import {
  Container,
  Button,
} from './styles';

interface LanguagePickerProps {
  userLanguage: string;
  languageDispatch: Dispatch<DispatchType>;
}

const LanguagePicker: FC<LanguagePickerProps> = ({
  userLanguage,
  languageDispatch,
}) => (
  <Container>
    {availableOptions.map((language) => {
      const upperCaseLanguage = language.toUpperCase();

      return (
        <Button
          isActive={language === userLanguage}
          key={language}
          onClick={() => languageDispatch({ type: upperCaseLanguage })}
        >
          {upperCaseLanguage}
        </Button>
      );
    })}
  </Container>
);

export default LanguagePicker;
