import * as emailjs from 'emailjs-com';
import { message } from 'antd';

import { DictionaryType } from '../../languages';

export default async (
  data: unknown,
  dictionary: DictionaryType,
  successCallback: () => void,
) => {
  const userId: string = (process.env.REACT_APP_USER_ID as string);
  const serviceId: string = (process.env.REACT_APP_SERVICE_ID as string);
  const templateId: string = (process.env.REACT_APP_TEMPLATE_ID as string);

  const { success, fail } = dictionary.emailFeedback;

  try {
    await emailjs.send(
      serviceId,
      templateId,
      data as HTMLFormElement,
      userId,
    );

    message.success(success);
    successCallback();
  } catch (error: any) {
    message.error(fail, 10);
  }
};
