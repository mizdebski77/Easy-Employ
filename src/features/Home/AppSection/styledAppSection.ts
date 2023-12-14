import { styled } from "styled-components";
import appImage from '../../../common/Images/appSection/appsection.jpg'

export const Wrapper = styled.div`
    margin-top: 120px;
    padding: 20px;
    border-radius: 20px;
    background: ${({ theme }) => theme.color.secondColor};
    display: grid;
    grid-template-columns: 2fr 1.5fr;
    gap: 40px;
    position: relative;
`;

export const TextWrapper = styled.div`

`;

export const ImagesWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const MobileImg = styled.img`
    width: 440px;
    position: absolute;
    margin: 0 auto;
    bottom: 40px;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.fontMain};
    font-size: 54px;
    text-align: center;
    font-weight: normal;
`;

export const DownloadInformation = styled.h2`
    color: ${({ theme }) => theme.color.fontMain};
    font-size: 32px;
    font-weight: normal;
    text-align: center;
    margin-bottom: 0px;
`;

export const Captions = styled.p`
    color: ${({ theme }) => theme.color.fontSecond};
    font-size: 20px;
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

