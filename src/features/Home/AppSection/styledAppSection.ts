import { styled } from "styled-components";

export const Wrapper = styled.div`
    margin-top: 80px;
    padding: 20px;
    border-radius: 20px;
    background: ${({ theme }) => theme.color.secondColor};
    display: grid;
    grid-template-columns: 2fr 1fr;
`;

export const TextWrapper = styled.div`

`;

export const ImagesWrapper = styled.div`

`;
