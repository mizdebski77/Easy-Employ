import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    margin-top: 10%;
    flex-direction: column;
    gap: 20px;
    justify-content: start;
    align-items: center;
    width: 100%;
`;

export const Title = styled.h1`
    font-size: 32px;
    font-weight: normal;
    text-align: center;
    color: ${({ theme }) => theme.color.fontMain};

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px) {
        font-size: 20px;
    };
`;

export const Image = styled.img`
    margin: 0 auto ;
    width: 150px;
    height: 150px;

    @media (max-width: ${({ theme }) => theme.breakPoint.thirdBp}px) {
        width: 100px;
        height: 100px;    
    };
`;