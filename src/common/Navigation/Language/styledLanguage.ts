import { styled } from "styled-components";

export const Wrapper = styled.div`

`;

export const FullScreenWrapper = styled.div`
    display: block;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LanguagesWindow = styled.div`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 40px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    gap: 80px;
    border: 4px solid ${({ theme }) => theme.color.fontMain};
`;

export const LangWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    gap: 20px;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 10px;

    &:hover {
        background: ${({ theme }) => theme.color.fontMain};
    }
`;

export const LangCaption = styled.span`
    font-size: 24px;
    color: ${({ theme }) => theme.color.fontSecond};
`;

export const FlagImg = styled.img`
    width: 100px;
`;

export const CloseButton = styled.button`
    position: fixed;
    z-index: 1;
    top: 80px;
    color: ${({ theme }) => theme.color.fontMain};
    transition: 0.3s;
    cursor: pointer;
    right: 80px;
    background: transparent;
    border: none;

    &:hover {
        transform: scale(1.2);
    }
`;