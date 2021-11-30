import { createTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

const colors = {
  background: "rgb(242, 242, 242)", //f2f2f2
  green: "#67f475",
  greenDark: "#2fd23e",
  purple: "#946dcc",
};

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: [
      "Futura Lt BT",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
  palette: {
    primary: { main: colors.green, dark: colors.greenDark },
    secondary: { main: colors.purple },
    background: {
      default: alpha(colors.background, 1),
    },
  },
});

export default theme;
