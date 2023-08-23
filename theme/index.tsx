import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        backgroundPrimary: "#2B2B2B",
        backgroundSecondary: "#3B3B3B",
        caption: "#858584",
        text: "#FFFFFF",
        cta: "#A259FF",
        blue: "#377DF7",
        red: "#FF7262",
    },
    fontSizes: {
        small: "1.4rem",
        medium: "1.6rem",
        large: "1.8rem",
        extra: "2rem",
    },
};

const Theme = ({ children }: { children: ReactNode }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
