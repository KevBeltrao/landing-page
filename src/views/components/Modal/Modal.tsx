import { FC } from 'react';
import { Form } from 'antd';

import { DictionaryType } from '../../../languages/index';
import {
  Container,
  FormTitle,
  FormComponent,
  InputsWrapper,
  FormItem,
  InputComponent,
  MessageField,
  SubmitButton,
} from './styles';
import { FormTypes } from './index';

interface WrapperProps {
  visible: boolean;
  closeModal: () => void;
  dictionary: DictionaryType;
  onSubmit: (values: FormTypes, clearFormFields: () => void) => Promise<void>;
}

const Modal: FC<WrapperProps> = ({
  visible,
  closeModal,
  dictionary,
  onSubmit,
}) => {
  const {
    title, name, email, company, message, submit,
  } = dictionary.banner.form;

  const [form] = Form.useForm();

  const clearForm = () => form.resetFields();

  return (
    <Container
      visible={visible}
      onCancel={closeModal}
    >
      <FormTitle>{title}</FormTitle>

      <FormComponent
        form={form}
        onFinish={(values: unknown) => onSubmit(values as FormTypes, clearForm)}
      >
        <InputsWrapper>
          <FormItem
            name="name"
            rules={[{
              required: true,
            }]}
          >
            <InputComponent placeholder={name} />
          </FormItem>

          <FormItem
            name="email"
            rules={[{
              type: 'email',
              required: true,
            }]}
          >
            <InputComponent placeholder={email} />
          </FormItem>

          <FormItem
            name="company"
          >
            <InputComponent placeholder={company} />
          </FormItem>

          <FormItem
            name="message"
            rules={[{
              required: true,
            }]}
          >
            <MessageField placeholder={message} />
          </FormItem>
        </InputsWrapper>

        <SubmitButton>{submit}</SubmitButton>
      </FormComponent>
    </Container>
  );
};

export default Modal;
