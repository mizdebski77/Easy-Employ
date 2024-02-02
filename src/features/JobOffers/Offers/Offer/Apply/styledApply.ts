import { styled } from "styled-components";

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 40px 20px;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    border-radius: 20px;
    width: 100%;
`;

export const ApplyTitle = styled.h3`
    font-size: 32px;
    text-align: center;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontSecond};
`;

export const Form = styled.form`
    width: 100%;
    border-radius: 20px;
    border: 2px dashed ${({ theme }) => theme.color.fontMain};
    padding: 40px;
    display: grid;
    gap: 40px;
`;

export const LabelWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
`;

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Label = styled.label`
    padding: 0 12px;
`;

export const Input = styled.input`
    border-radius: 10px;
    padding: 10px 20px;
    border: 1px solid ${({ theme }) => theme.color.fontSecond};

    &:focus {
        outline-color: ${({ theme }) => theme.color.fontMain};
    }
`;

export const ApplyButton = styled.button`
    width: 32%;
    margin: 0 auto;
    padding: 10px;
    border-radius: 20px;
    border: none;
    background: ${({ theme }) => theme.color.fontMain};
    color: ${({ theme }) => theme.color.mainColor};
`;