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
    padding: 20px;
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fourthColor};
    border-radius: 10px;
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

export const CVSectionTitle = styled.h3`
    font-size: 20px;
    font-weight: normal;
`;

export const ElementsWrapper = styled.div`
    display: grid;
    gap: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.fourthColor};
    padding-bottom: 20px;
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
    justify-self: start;
    font-size: 18px;
`;

export const ContentSpan = styled.span`
    font-weight: normal;
`;

export const ExpWrapper = styled.div`
    display: grid;
    gap: 12px;
    justify-content
`;

export const TilesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 44px;
`;

export const ExpDuration = styled.span`
    font-size: 16px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontSecond};
`;

export const ExpContent = styled.span`
    font-size: 16px;
    font-weight: normal;
    max-width: 440px;
    text-align: left;
`;

export const ExpSecondTitle = styled.span`
    justify-self: start;
    margin-left: 20px;
    font-size: 18px;
    font-weight: normal;
`;

export const InterestsWrapper = styled.div`
    display: flex;
    justify-content: start;
    padding: 0 20px;
    font-size: 16px;
    font-weight: normal;
    justify-self: start;
    text-align: left;
`;

export const Link = styled.a`
    text-align: left;
    font-size: 16px;
    margin-bottom: 12px;
`;
