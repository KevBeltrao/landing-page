import {
  FC,
  createContext,
  useReducer,
  Dispatch,
} from 'react';

import {
  dictionaryList,
  DictionaryType,
  availableOptions,
  LanguageType,
} from '../../languages';
import reducer from './reducer';

const getCurrentLanguage = (): LanguageType => {
  const DEFAULT_LANGUAGE = 'en';

  const { language } = navigator;

  if (!language) return DEFAULT_LANGUAGE;

  const [languageLetters] = language.split('-');

  if (!availableOptions.includes(languageLetters)) return DEFAULT_LANGUAGE;

  return languageLetters as LanguageType;
};

export type DispatchType = {
  type: string;
}

export type ContextValueType = {
  userLanguage: string;
  dictionary: DictionaryType;
}

export type ContextType = {
  languageValue: ContextValueType;
  languageDispatch: Dispatch<DispatchType>;
};

export const LanguageContext = createContext({} as ContextType);

const LanguageProvider: FC = ({ children }) => {
  const initialLanguage = getCurrentLanguage();

  const [languageValue, languageDispatch] = useReducer(reducer, {
    userLanguage: initialLanguage,
    dictionary: dictionaryList[initialLanguage],
  });

  return (
    <LanguageContext.Provider value={{ languageValue, languageDispatch }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
