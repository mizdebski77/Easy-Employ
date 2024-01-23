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

export const DataInput = styled.input`
    width: 80%;
    border-radius: 20px;
    padding: 16px;
    background: ${({ theme }) => theme.color.thirdColor};
    border: none;

    &:focus {
        outline: none;
    }
`;

export const CurrentWrapper = styled.label`
    display: flex;
    gap: 10px;   
    cursor: pointer; 
`;

export const CurrentSpan = styled.span`

`;

export const CurrentInput = styled.input`

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


export const TextArea = styled.textarea`
    width: 80%;
    border-radius: 20px;
    padding: 16px;
    background: ${({ theme }) => theme.color.thirdColor};
    border: none;
    resize: none;
    min-height: 200px;

    &:focus {
        outline: none;
    }
`;

export const SkillsWrapper = styled.div`
    padding: 10px;
    display: flex;
    justify-content: start;
    gap: 20px;
`;

export const SkillsContainer = styled.div`
    position: relative;
`;


export const Skill = styled.span`
    background: ${({ theme }) => theme.color.fontMainActive};
    padding: 8px 10px;
    border-radius: 20px;
    color: ${({ theme }) => theme.color.mainColor};

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 12px;
    };
`;

export const RemoveSkillButton = styled.button`
    position: absolute;
    border-radius: 50%;
    font-size: 12px;
    background: #ff2d32;
    color: white;
    border: none;
    right: 2px;
    bottom: 20px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: #ff6f72;
    }
`;



