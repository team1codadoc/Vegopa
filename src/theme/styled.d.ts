// import original module declarations
import "styled-components";
import theme from "./index";

type ThemeInterface = typeof theme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends ThemeInterface {}
}
