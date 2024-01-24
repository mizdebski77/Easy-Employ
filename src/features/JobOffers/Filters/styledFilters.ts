import { styled } from "styled-components";

export const Wrapper = styled.section`

`;

export const FiltersWrapper = styled.div`
    background: ${({ theme }) => theme.color.secondColor};
    box-shadow: 0 0 6px ${({ theme }) => theme.color.thirdColor};
    border-radius: 10px;
`;

export const FilterTitle = styled.h3`
    font-size: 28px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontMain};
    text-align: center;
    padding: 20px;
    border-bottom: 2px solid ${({ theme }) => theme.color.thirdColor};
    margin: 0;
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
`;

export const ListItemWrapper = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 6px 8px;
    transition: 0.3s;

    &:hover {
        background: ${({ theme }) => theme.color.mainColor};
    }
`;

export const FilterCountSpan = styled.span`
    font-size: 12px;
    color: ${({ theme }) => theme.color.fontMainHover};
`;

