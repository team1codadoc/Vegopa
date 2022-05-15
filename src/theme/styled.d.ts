// import original module declarations
import "styled-components";
import theme from "./index";

type ThemeInterface = typeof theme;

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}
