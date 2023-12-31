import { DefaultTheme as StyledDefaultTheme } from "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme extends StyledDefaultTheme {
        color: {
            mainColor: string;
            fontMain: string;
            fontSecond: string;
            fontMainHover: string;
            secondColor: string;
            thirdColor: string;
            fontMainActive: string;
            fourthColor: string;
        }
        breakPoint: {
            firstBp: number,
            secondBp: number,
            thirdBp: number
        };
    }
}