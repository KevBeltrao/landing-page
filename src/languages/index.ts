import pt from './pt.json';
import en from './en.json';

export const dictionaryList = { en, pt };

export const availableOptions = ['en', 'pt'];

export type LanguageType = 'en' | 'pt';

export type DictionaryType = {
  banner: {
    title: {
      greet: string;
      introduce: string[];
    };
    youtube: string[];
    contactBalloon: string[];
    form: {
      title: string;
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
    }
  },
  emailFeedback: {
    success: string;
    fail: string;
  }
};
