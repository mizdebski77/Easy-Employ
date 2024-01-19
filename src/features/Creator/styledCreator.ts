import { styled } from "styled-components";

export const Wrapper = styled.section`
    max-width: 1500px;
    margin: 0 auto;
    padding: 20px;
    min-height: 100vh;
`;

export const Title = styled.h1`
    font-size: 54px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontMain};
    text-align: center;
`;

export const ContentWrapper = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`;

export const FormsWrapper = styled.div`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 40px 20px;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    border-radius: 10px;
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

export const SaveButton  = styled.button`
    
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

export const CVTitle = styled.span`
    font-size: 14px;
    margin-bottom: 20px;
`;

export const CVPreview = styled.div`
    background: ${({ theme }) => theme.color.secondColor};
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    padding: 40px 20px;
    font-size: 20px;
    text-align: center;
    display: grid;
    gap: 10px;
`;

export const CVName = styled.span`
    font-size: 24px;
    margin-bottom: 20px;
`;

export const SpanWrapper = styled.div`
    font-size: 16px;
    display: flex;
    gap: 10px;
    justify-content: center;
`;

export const TitleSpan = styled.span`
    font-weight: 600;
    color: ${({ theme }) => theme.color.fontSecond};
`;

export const ContentSpan = styled.span`
    font-weight: normal;
`;

export const ExpWrapper = styled.div`

`;

export const ExpDuration = styled.span`

`;

export const ExpTitle = styled.span`

`;

export const ExpCompany = styled.span`

`;

