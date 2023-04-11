import {createTheme} from "@material-ui/core";


export const categoryIndicatorFor = "#00BA13";
export const categoryIndicatorNeutral = "#FFAB00";
export const categoryIndicatorAgainst = "#F7685B";

export const categoryColourMap = {
  for: categoryIndicatorFor,
  neutral: categoryIndicatorNeutral,
  against: categoryIndicatorAgainst,
};

export const themeObject = {
  palette: {
    primary: {
      light: "#ffffff",
      main: "#CAD3DA",
      dark: "#7d8a93",
      contrastText: "#191919",
      commentsGrey: "#E8ECEF",
    },
    secondary: {
      light: "#FF4500",
      main: "#447BFE",
      dark: "#7d8a93",
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  },
};
const theme = createTheme(themeObject);

export default theme;
