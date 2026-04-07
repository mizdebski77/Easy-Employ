import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 20px;
    gap: 16px;
`;

export const Image = styled.img`
    width: 64px;
    opacity: 0.5;
    filter: hue-rotate(180deg);
`;

export const Title = styled.p`
    font-size: 15px;
    color: ${({ theme }) => theme.color.fontMuted};
    text-align: center;
    max-width: 360px;
`;
