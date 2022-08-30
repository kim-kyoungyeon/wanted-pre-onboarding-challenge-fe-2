import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    cloudColor: string;
    accentColor: string;
    whiteColor: string;
    inputStyle: string;
    clickedStyle: string;
    boxShadow: string;
  }
}
