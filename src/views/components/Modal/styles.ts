import styled from 'styled-components';
import {
  Modal,
  Form,
  Input,
  Button,
} from 'antd';

const { Item } = Form;
const { TextArea } = Input;

export const Container = styled(Modal).attrs({ footer: null })`
`;

export const FormTitle = styled.h3`
  text-align: center;
  margin: 10px 0 25px 0;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const FormComponent = styled(Form).attrs({
  autoComplete: 'off',
})`
  display: grid;
`;

export const InputsWrapper = styled.div`
  display: grid;
  grid-template-areas: 
    "name message"
    "email message"
    "company message";
  grid-gap: 20px;

  @media(max-width: 900px) {
    grid-template-areas: 
      "name"
      "email"
      "company"
      "message";
  }
`;

export const FormItem = styled(Item)`
  grid-area: ${({ name }: { name: string }) => name};

  .ant-form-item-explain {
    font-size: 0.9rem;
  }

  & > .ant-form-item-control {
    height: 100%;

    & > .ant-form-item-control-input {
      height: 100%;

      .ant-form-item-control-input-content {
        height: 100%;
      }
    }
  }
`;

export const InputComponent = styled(Input)`
  background: ${({ theme }) => theme.inputBackground};
  border: 0;
  color: ${({ theme }) => theme.blue};
  padding: 5px 10px;
  
  &::placeholder  {
    color: ${({ theme }) => theme.lightGray};
  }

  .ant-input {
    background-color: blue !important;
  }

  @media(max-width: 900px) {
    padding: 10px 10px;
  }
`;

export const MessageField = styled(TextArea)`
  height: 100% !important;
  background: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.blue};
  border: 0;
  resize: none;
`;

export const SubmitButton = styled(Button).attrs({
  type: 'primary',
  htmlType: 'submit',
})`
  padding: 10px 20px;
  margin: 10px auto;
  
  display: flex;
  align-items: center;
`;
