import {
  dictionaryList,
  LanguageType,
  availableOptions,
} from '../../languages';

import { ContextValueType } from './LanguageContext';

export default (
  state: ContextValueType,
  action: { type: string },
): ContextValueType => {
  const { type } = action;

  const lowerCaseType = type.toLowerCase();

  if (availableOptions.includes(lowerCaseType)) {
    return {
      userLanguage: lowerCaseType,
      dictionary: dictionaryList[lowerCaseType as LanguageType],
    };
  }

  return state;
};
