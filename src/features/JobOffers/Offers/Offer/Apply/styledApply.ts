import { styled } from "styled-components";

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 20px;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    border-radius: 8px;
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
    border-radius: 8px;
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

export const LabelSpan = styled.label`
    color:red;
`;

export const Input = styled.input`
    padding:  12px;
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme.color.thirdColor};
    color: black;
    transition: 0.3s;
    max-width: 480px;
    width: 100%;

    &:focus {
        outline: ${({ theme }) => theme.color.fontMain};
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        padding: 8px;
        font-size: 14px;
    };
`;

export const ApplyButton = styled.button`
    width: 32%;
    margin: 0 auto;
    padding: 12px;
    border-radius: 8px;
    border: none;
    background: ${({ theme }) => theme.color.fontMain};
    color: ${({ theme }) => theme.color.mainColor};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: ${({ theme }) => theme.color.fontMainHover};
    };

    &:active {
        background: ${({ theme }) => theme.color.fontMainActive};
    };
`;

export const FileWrapper = styled.div`
    cursor: pointer;
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 2px solid ${({ theme }) => theme.color.thirdColor};
    border-radius: 8px
`;

export const FileName = styled.span`

`;

export const RemoveButton = styled.button`
    background: black;
    color: white;
    border: none;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: red;
    }
`;

export const FileImg = styled.img`
    opacity: 0.8;
    max-width: 40px;
`;