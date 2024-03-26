import { css, styled } from "styled-components";

export const Wrapper = styled.section`

`;

export const FiltersWrapper = styled.div`
    background: ${({ theme }) => theme.color.secondColor};
    box-shadow: 0 0 6px ${({ theme }) => theme.color.thirdColor};
    border-radius: 8px;
`;

export const TitleWrapper = styled.div`
    display: flex;
    border-bottom: 2px solid ${({ theme }) => theme.color.thirdColor};
    justify-content: center;
    align-items: center;
`;

export const FilterTitle = styled.h3`
    font-size: 28px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontMain};
    text-align: center;
    padding: 20px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 24px;
    };
`;

export const TitleSpan = styled.span`
    color: ${({ theme }) => theme.color.fontSecond};
`;

export const FilterCategory = styled.div`
    border-bottom: 2px solid ${({ theme }) => theme.color.thirdColor};
    padding: 20px 10px ;
`;

export const CategoryWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Arrow = styled.button`
    color: ${({ theme }) => theme.color.fontMain};
    background: none;
    border: none;
    cursor: pointer;
`;

export const List = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const FilterName = styled.span`
    font-size: 16px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 14px;
    };
`;

export const ListItemWrapper = styled.div<{ checked?: boolean; }>`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 6px 8px;
    transition: 0.3s;

    &:hover {
        background: ${({ theme }) => theme.color.mainColor};
    };

    ${({ checked }) => checked && css`
        background: ${({ theme }) => theme.color.mainColor};
    `};

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 14px;
    };
`;

export const SpanCheckBox = styled.div<{ checked?: boolean; }>`
    border: 1px solid ${({ theme }) => theme.color.fontMain};
    color: ${({ theme }) => theme.color.secondColor};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    height: 18px;
    width: 18px;

    ${({ checked }) => checked && css`
        background: ${({ theme }) => theme.color.fontMain};
    `};

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        height: 14px;
        width: 14px;
    };
`;

export const FilterCountSpan = styled.span`
    font-size: 12px;
    color: ${({ theme }) => theme.color.fontMainHover};

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 10px;
    };
`;

