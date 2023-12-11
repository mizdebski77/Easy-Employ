import { Link } from "react-router-dom";
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

export const ContentWrapper = styled.div`
    display: flex;
    gap: 40px;
    position: relative;
`;

export const ProfileWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 40px;
    align-items: center;
    background: white;
    padding: 20px 80px 20px;
    border-radius: 20px;
`;

export const TextWrapper = styled.div`
    padding-left: 480px;
`;

export const ProfileTitle = styled.h2`
    font-size: 40px;
    color: ${({ theme }) => theme.color.fontMain};;
    font-weight: normal;
`;

export const ProfileSpan = styled.p`
    color: ${({ theme }) => theme.color.fontMain};;

`;

export const ProfileImg = styled.img`
  position: absolute;
  top: -80px; 
  left: 0;
  z-index: 1; 
  width: 400px;
`;

export const ProfileLink = styled(Link)`
    background: ${({ theme }) => theme.color.fontMain};
    padding: 12px 48px;
    color: ${({ theme }) => theme.color.secondColor};
    text-decoration: none;
    font-size: 18px;
    border-radius: 20px;
    transition:0.3s;

    &:hover {
        background: ${({ theme }) => theme.color.fontMainHover};
    };

    &:active {
        background: ${({ theme }) => theme.color.fontMainActive};
    };

`;

export const TilesWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 40px;
    gap: 40px;
`;

export const CarrerTile = styled.div`
    background: white;
    border-radius: 20px;
`;

export const CarrerImg = styled.img`
    width: 100%;
    border-radius: 20px;
`;

export const TextContainer = styled.div`
    padding: 20px;
`;

export const TileTitle = styled.h3`
    font-size: 28px;
    text-align: center;
    margin: 0 0 20px 0;
    font-weight: normal;
    color:${({ theme }) => theme.color.fontMain}
`;

export const TileSpan = styled.span`
    font-size: 20px;
`;