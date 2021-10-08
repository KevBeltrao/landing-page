import {
  FC,
  createContext,
  useReducer,
  Dispatch,
  useEffect,
} from 'react';

import {
  dictionaryList,
  DictionaryType,
  availableOptions,
  LanguageType,
} from '../../languages';
import reducer from './reducer';

export const languageLocalStorageKey = 'KevBeltrao.lang';

const getCurrentLanguage = (): LanguageType => {
  const DEFAULT_LANGUAGE = 'en';

  // get last saved language from local storage
  const savedLanguage = localStorage.getItem(languageLocalStorageKey);

  // if there is a saved language and it is valid then return it
  if (savedLanguage && availableOptions.includes(savedLanguage)) {
    return savedLanguage as LanguageType;
  }

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
  // initilize reducer with default 'en' language
  const [languageValue, languageDispatch] = useReducer(reducer, {
    userLanguage: 'en',
    dictionary: dictionaryList.en,
  });

  // On first run only get current language
  useEffect(() => languageDispatch({ type: getCurrentLanguage() }), []);

  return (
    <LanguageContext.Provider value={{ languageValue, languageDispatch }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
