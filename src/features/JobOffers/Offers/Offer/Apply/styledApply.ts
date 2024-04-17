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

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 24px;
        margin: 0 0 20px;
    };
`;

export const Form = styled.form`
    width: 100%;
    border-radius: 8px;
    border: 2px dashed ${({ theme }) => theme.color.fontMain};
    padding: 40px;
    display: grid;
    gap: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        padding: 32px 20px;
        gap: 20px;
    };
`;

export const InputsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        grid-template-columns: 1fr;
    };
`;

export const LabelWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        flex-direction: column;
    };
`;

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const ApplyButton = styled.button`
    width: 40%;
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

    &:disabled {
        opacity: 0.3;
        cursor: no-drop;

        &:hover {
            background: ${({ theme }) => theme.color.fontMain};
    };
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        width: 100%;
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