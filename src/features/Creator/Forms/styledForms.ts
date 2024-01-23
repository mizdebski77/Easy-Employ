import { styled } from "styled-components";

export const Wrapper = styled.section`
`;

export const FormsWrapper = styled.div`
    background: ${({ theme }) => theme.color.secondColor};
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    border-radius: 10px;
    padding: 20px;
`;

export const FormWrapper = styled.div`
    padding: 20px 0 ;
    border-bottom: 1px solid ${({ theme }) => theme.color.fourthColor};
`;

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
`;

export const CloseButton = styled.button`
`;

export const DataTitle = styled.h2`
    font-weight: normal;
    font-size: 28px;
    color: ${({ theme }) => theme.color.fontMain};
    text-align: center;
`;

export const DataForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
`;

export const SaveButton = styled.button`
    background: ${({ theme }) => theme.color.fontMain};
    color: ${({ theme }) => theme.color.secondColor};
    padding: 10px 80px;
    border: none;
    border-radius: 20px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.color.fontMainHover}
    };

    &:active {
        background: ${({ theme }) => theme.color.fontMainActive}
    };
`;

export const NextButton = styled.button`

`;
