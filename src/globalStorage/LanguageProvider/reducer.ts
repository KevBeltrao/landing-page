import {
  dictionaryList,
  LanguageType,
  availableOptions,
} from '../../languages';

import { ContextValueType, languageLocalStorageKey } from './LanguageContext';

export default (
  state: ContextValueType,
  action: { type: string },
): ContextValueType => {
  const { type } = action;

  const lowerCaseType = type.toLowerCase();

  if (availableOptions.includes(lowerCaseType)) {
    // save current langauge on change
    localStorage.setItem(languageLocalStorageKey, lowerCaseType);

    return {
      userLanguage: lowerCaseType,
      dictionary: dictionaryList[lowerCaseType as LanguageType],
    };
  }

  return state;
};
