import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Wrapper = styled.section`
    margin-top: 80px;
`;

export const Title = styled.h1`
    font-size: 54px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontMain};
    text-align: center;
`;

export const TileWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
`;

export const Tile = styled.div`
    background: ${({ theme }) => theme.color.thirdColor};
    box-shadow: 0 0 10px ${({ theme }) => theme.color.fontSecond};
    border-radius: 20px;
    transition: 0.3s;

    &:hover {
        box-shadow: 0 0 10px ${({ theme }) => theme.color.fontMain};
    }
`;

export const TileImage = styled.img`
    max-width: 600px;
    width: 100%;
    border-radius: 20px 20px 0 0;
`;

export const TileContent = styled.div`
    padding: 20px;
`;

export const TileTitle = styled.h2`
    font-size: 32px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.fontMain};
    text-align: center;
`;

export const TileArticle = styled.article`
    font-size: 20px;
    text-align: justify;
`;

export const ReadMore = styled(Link)`
    color: ${({ theme }) => theme.color.fontMain};
    font-size: 18px;
    text-decoration: none;
    float: right;
    padding: 20px 0 20px 20px;
    transition: 0.3s;

    &:hover {
        transform: scale(1.05);
    }
`;