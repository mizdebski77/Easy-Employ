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
    background: rgba(71, 75, 79, 0.7);
    padding: 40px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    gap: 80px;
    border: 3px solid ${({ theme }) => theme.color.fontMain};

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        gap: 40px;
        grid-template-columns: 1fr 1fr;
        padding: 20px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        grid-template-columns: 1fr;
        gap: 20px;
    };
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
        background: rgba(	151, 208, 74, 0.5);
    };

`;

export const LangCaption = styled.span`
    font-size: 24px;
    color: ${({ theme }) => theme.color.fontSecond};

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 16px;
    };
`;

export const FlagImg = styled.img`
    width: 100px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        width: 40px;
    };
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
    };
`;