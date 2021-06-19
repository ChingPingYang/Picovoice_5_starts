import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";
import red from "@material-ui/core/colors/red";
import orange from "@material-ui/core/colors/orange";

export const theme = createMuiTheme({
  palette: {
    primary: { main: red["A700"] },
    secondary: { main: orange["A200"] },
  },
});

theme.overrides = {
  // .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline
  // ^ Above is the className for the select:focus outline.
  MuiOutlinedInput: {
    root: {
      "&$focused .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.grey[400],
      },
    },
  },
  MuiSelect: {
    select: {
      "&:focus": {
        backgroundColor: "none",
      },
    },
  },
  MuiMenuItem: {
    root: {
      fontSize: "0.8rem",
    },
  },
  MuiList: {
    padding: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },

  MuiCssBaseline: {
    "@global": {
      "*, *::before, *::after": {
        boxSizing: "inherit",
        margin: 0,
        padding: 0,
      },
      html: {
        width: "100vw",
        height: "100vh",
        boxSizing: "border-box",
      },
      body: {
        width: "100%",
        height: "100%",
      },
    },
  },
};
