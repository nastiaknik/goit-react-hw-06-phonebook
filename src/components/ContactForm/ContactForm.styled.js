import styled from 'styled-components';
import { Field, Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 0;
`;

export const Label = styled.label`
  padding: 0 5px;
  opacity: 0.8;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  gap: 10px;
`;

export const StyledField = styled(Field)`
  margin-left: 5px;
  padding: 8px;
  background: transparent;
  border: 2px solid #e5e0ff;
  border-radius: 5px;
  font-size: 16px;
  :focus {
    outline: 1px solid #7286d3;
  }

  &.error {
    border-color: tomato;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 30px;
  margin: 0 auto 20px;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #8ea7e9;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: #7286d3;
  }
`;

export const LabelContainer = styled.div`
  position: relative;
`;

export const Error = styled.span`
  display: block;
  color: tomato;
  text-align: start;
  width: 230px;
  font-size: 16px;
`;
