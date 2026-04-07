import { DefaultTheme as StyledDefaultTheme } from "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme extends StyledDefaultTheme {
        color: {
            mainColor: string;
            bgCard: string;
            bgCard2: string;
            bgCard3: string;
            fontMain: string;
            fontMainHover: string;
            fontMainActive: string;
            fontAccent2: string;
            fontSecond: string;
            fontMuted: string;
            fontSubtle: string;
            green: string;
            greenBg: string;
            amber: string;
            amberBg: string;
            red: string;
            redBg: string;
            secondColor: string;
            thirdColor: string;
            fourthColor: string;
            borderSubtle: string;
            borderMid: string;
            accentGlow: string;
        }
        breakPoint: {
            firstBp: number,
            secondBp: number,
            thirdBp: number
        };
    }
}
