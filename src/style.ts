import { makeStyles } from "@mui/styles";
// import { alpha } from "@mui/material/styles";
import theme from "./MUITheme";

const useStyles = makeStyles({
  hFlex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    "& img": {
      width: "175px",
    },
  },
  lightItalic: {
    fontFamily: "Futura Lt BT",
    fontWeight: 300,
    fontStyle: "italic",
  },
  lightNormal: {
    fontFamily: "Futura Lt BT",
    fontWeight: 300,
  },
  boldNormal: {
    fontFamily: "Futura!important",
    letterSpacing: "-0.7px",
  },
  headerClass: {
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 99,
    backdropFilter: "saturate(180%) blur(20px)",
    animation: ".2s ease-in-out forwards $sticky",
    "& .notification-bar": { display: "none" },
  },
  "@keyframes sticky": {
    "0%": {
      transform: "translateY(-60px)",
      backdropFilter: "saturate(180%) blur(20px)",
    },
    "100%": {
      transform: "translateY(0)",
      backdropFilter: "saturate(180%) blur(20px)",
    },
  },
  menuItem: {
    fontFamily: "Futura!important",
    padding: "8px 12px",
    marginRight: "8px",
    position: "relative",
    "&:hover": {
      backgroundColor: "transparent!important",
      "&::after": {
        top: "100%",
        content: '""',
        position: "absolute",
        display: "block",
        width: "100%",
        height: "3px",
        background: theme.palette.primary.main,
        left: "0",
      },
    },
  },
});

export default useStyles;
