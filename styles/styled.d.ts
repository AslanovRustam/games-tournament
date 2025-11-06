import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bgGlass: string;
      bg: string;
      text: string;
      primary: string;
      secondary: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
