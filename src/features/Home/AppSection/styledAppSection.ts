import { styled } from "styled-components";

export const Wrapper = styled.div`
    margin-top: 80px;
    padding: 20px;
    border-radius: 20px;
    background: ${({ theme }) => theme.color.secondColor};
    display: grid;
    grid-template-columns: 2fr 1.5fr;
`;

export const TextWrapper = styled.div`

`;

export const ImagesWrapper = styled.div`

`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.fontMain};
    font-size: 54px;
    text-align: center;
    font-weight: normal;

`;

export const DownloadInformation = styled.h2`
    color: ${({theme}) => theme.color.fontMain};
    font-size: 32px;
    font-weight: normal;
    text-align: center;
`;

export const Captions = styled.p`
    color: ${({ theme }) => theme.color.fontSecond};
    font-size: 20px;
`;

export const StoresIconsWrapper = styled.div`

`;

export const StoreIcon = styled.img`

`;

