import { styled } from "styled-components";

export const Wrapper = styled.div`
    margin-top: 180px;
    padding: 20px;
    border-radius: 20px;
    background: ${({ theme }) => theme.color.secondColor};
    display: grid;
    grid-template-columns: 2fr 1.5fr;
    gap: 40px;
    position: relative;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        display: flex;
        flex-direction: column-reverse;
        gap: 20px;
    };
`;

export const TextWrapper = styled.div`

`;

export const ImagesWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const MobileImg = styled.img`
    max-width: 440px;
    width: 100%;
    position: absolute;
    margin: 0 auto;
    bottom: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        max-width: 360px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        max-width: 240px;
        position: sticky;
    };
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.fontMain};
    font-size: 54px;
    text-align: center;
    font-weight: normal;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        font-size: 40px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 32px;
    };
`;

export const DownloadInformation = styled.h2`
    color: ${({ theme }) => theme.color.fontMain};
    font-size: 32px;
    font-weight: normal;
    text-align: center;
    margin-bottom: 0px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBp}px){
        font-size: 28px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 24px;
    };
`;

export const Captions = styled.p`
    color: ${({ theme }) => theme.color.fontSecond};
    font-size: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px){
        font-size: 16px;
    };
`;

export const StoresIconsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

export const StoreIcon = styled.img`
    max-width: 120px;
    transition: 0.3s;

    &:hover {
        transform: scale(1.05);
        cursor: pointer;
    }
`;

