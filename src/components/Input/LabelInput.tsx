import styled from "@emotion/styled";
import { InputHTMLAttributes, ReactNode, useRef } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  rightElement?: ReactNode;
  label?: string;

  // error
  isHint?: boolean; // * 에러메시지 표시 여부
  errorMessage?: string; // * 에러메시지

  // @param onReset: () => void; // * input value 초기화 함수
  onReset?: () => void;
}

const InputBase = (props: Props) => {
  console.log("props: ", props.value);
  const isInvalid = Boolean(props.errorMessage);

  const inputRef = useRef<HTMLInputElement>(null);

  const onReset = () => {
    props.onReset?.();

    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <InputContainer isInvalid={isInvalid} disabled={props.disabled}>
        {props.label && <Label value={props.value}>{props.label}</Label>}
        <InputWrapper>
          <input
            ref={inputRef}
            type="text"
            autoComplete="new-password"
            {...props}
          />
        </InputWrapper>
        <Slot>
          {props.onReset && Boolean(props.value) && !props.disabled && (
            <ClearBtn onClick={onReset}>x</ClearBtn>
          )}
          {props.rightElement}
        </Slot>
      </InputContainer>
      {props.isHint && isInvalid && (
        <ErrorMessage>{props.errorMessage}</ErrorMessage>
      )}
    </div>
  );
};
InputBase.displayName = "InputBase";

export default InputBase;

const Label = styled.div<Pick<Props, "value">>`
  position: absolute;
  top: 16px;

  color: gray;

  /* color: ${({ theme }) => theme.color.gray[450]};
  ${({ theme }) => theme.font.b2.medium}; */
  transition: all 0.3s ease-in-out;

  ${({ value, theme }) =>
    value && `${theme.font.c2.medium}; transform: translate(0, -9px);`}
`;

const InputContainer = styled.div<{ isInvalid?: boolean; disabled?: boolean }>`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 20px;

  border-radius: 10px;
  border: 1px solid gray;
  background: #fff;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary[400]};
  }

  &:focus-within {
    box-shadow: 0px 0px 0px 3px rgba(241, 88, 34, 0.1);
    border: 1px solid ${({ theme }) => theme.colors.primary[400]};

    ${Label} {
      ${({ theme }) => theme.font.c2.medium};
      transform: translate(0, -9px);
    }
  }
  ${({ isInvalid, theme }) =>
    isInvalid &&
    `
      border: 1px solid ${theme.color.error[3]};
      ${Label} {
        color: ${theme.color.error[3]};
      }
    `}
  ${({ disabled, theme }) =>
    disabled &&
    `
      border: 1px solid ${theme.color.gray[200]};
      background:${theme.color.gray[50]};


      &:hover {
        border-color: ${theme.color.gray[200]};
      }
    `}
`;

const InputWrapper = styled.div`
  flex: 1;
  input {
    word-break: keep-all;
    margin: 0;
    box-shadow: none;
    display: flex;
    align-items: center;

    ${({ theme }) => theme.font.b2.medium};
    caret-color: ${({ theme }) => theme.color.primary[400]};
    color: ${({ theme }) => theme.color.gray[700]};
    background: transparent;

    height: 56px;
    width: 100%;
    box-sizing: border-box;

    border: none;
    padding: 0;

    padding-top: 25px;
    padding-bottom: 7px;

    outline: none;
    resize: none;
    border-radius: 10px;

    /*
    * input[type="password"] && Edge 브라우저일때 비밀번호 보기 이슈 -ms-reveal
    */
    &[type="password"] {
      padding-right: 40px;
    }

    &:focus {
      outline: 0;
      border: none;
      /* box-shadow: 0px 0px 0px 3px rgba(241, 88, 34, 0.1); */
      box-shadow: none;
    }
    &.form-control:disabled,
    &.disabled,
    &:disabled {
      background: transparent;
      cursor: not-allowed;

      /* 모바일뷰에서 input 넓이가 과도하게 넓어지는 이슈 해결 */
      @media ${theme.mobile} {
        width: -webkit-fill-available !important;
      }
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    // auto fill 시에 배경색 제거
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
    }
  }
`;

const Slot = styled.div`
  display: flex;
  align-items: center;
  top: 0;
  right: 0;
  height: 56px;
  gap: 16px;
`;

const ClearBtn = styled.span`
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 8px 2px 0;
  color: ${({ theme }) => theme.color.error[3]};
  ${({ theme }) => theme.font.c2.regular};
`;
