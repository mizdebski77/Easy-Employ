import { styled } from "styled-components";

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.color.fontMain};
    padding: 20px;
    margin-top: 120px;
    border-radius: 20px;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 54px;
    color: white;
    font-weight: normal;
    margin-bottom: 80px;
`;

export const ProfileWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    align-items: center;
`;

export const TextWrapper = styled.div`

`;

export const ProfileTitle = styled.h2`
    font-size: 40px;
    color: white;
    font-weight: normal;
`;

export const ProfileSpan = styled.p`
    color: white;

`;  

export const ProfileImg = styled.img`
    width: 200px;
    height: 200px;
    display: block;
`;

export const CarrerTile = styled.div`

`;