import LanguageProvider, {
  LanguageContext,
  DispatchType,
  ContextType,
  ContextValueType,
} from './LanguageContext';
import actions from './actions';

export { LanguageContext };
export type { DispatchType, ContextType, ContextValueType };
export const languageActions = actions;

export default LanguageProvider;
