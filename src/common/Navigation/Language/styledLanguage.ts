import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    top: 68px;
    right: 54px;
    background: ${({ theme }) => theme.color.bgCard};
    border: 1px solid ${({ theme }) => theme.color.borderMid};
    border-radius: 14px;
    padding: 12px;
    z-index: 50;
    min-width: 200px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5);

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBp}px) {
        right: 24px;
    }
`;

export const LanguageItem = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 12px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s;
    color: ${({ theme }) => theme.color.fontMuted};
    font-size: 14px;

    &:hover {
        background: ${({ theme }) => theme.color.bgCard2};
        color: ${({ theme }) => theme.color.fontSecond};
    }
`;

export const FlagImg = styled.img`
    width: 22px;
    height: 16px;
    object-fit: cover;
    border-radius: 2px;
`;
