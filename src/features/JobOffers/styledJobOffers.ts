import { styled } from "styled-components";

export const Wrapper = styled.section`
    padding: 20px;
    max-width: 1500px;
    margin: 0 auto;
    min-height: 100vh;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 54px;
    color: ${({ theme }) => theme.color.fontMain};
    font-weight: normal;
`;

export const FormWrapper = styled.div`
    background: ${({ theme }) => theme.color.thirdColor};

`;

export const Form = styled.form`
    padding: 40px;
    display: flex;
`;

export const Input = styled.input`
    padding: 8px 12px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.color.fontMain};
    
    &:focus {
        outline: none;
    }
`;

export const KeyWordsWrapper = styled.div`

`;

export const SearchButton = styled.button`

`;
    

