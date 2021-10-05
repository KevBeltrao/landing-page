import { FC, useContext } from 'react';
import sendEmail from '../../../services/email';

import Modal from './Modal';
import { LanguageContext } from '../../../globalStorage/LanguageProvider';

interface WrapperProps {
  visible: boolean;
  closeModal: () => void;
}

export type FormTypes = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const Wrapper: FC<WrapperProps> = ({ visible, closeModal }) => {
  const { languageValue } = useContext(LanguageContext);

  const onSubmit = async (values: FormTypes, clearFormFields: () => void) => {
    sendEmail(values, languageValue.dictionary, () => {
      clearFormFields();
      closeModal();
    });
  };

  return (
    <Modal
      visible={visible}
      closeModal={closeModal}
      dictionary={languageValue.dictionary}
      onSubmit={onSubmit}
    />
  );
};

export default Wrapper;
