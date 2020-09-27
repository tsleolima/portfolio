import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import * as serviceWorker from "./serviceWorker";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { jssPreset, StylesProvider } from "@material-ui/core/styles";
import { create } from "jss";
import jssTemplate from "jss-plugin-template";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const jss = create({
    plugins: [jssTemplate(), ...jssPreset().plugins],
  });

  const theme = createMuiTheme(
    {
      typography: {
        fontFamily: ["Open Sans"],
        h3: { fontSize: 38 },
        h4: { fontSize: 28 },
        h5: { fontSize: 22 },
        h6: { fontSize: 18 },
      },
      palette: {
        type: prefersDarkMode ? "dark" : "light",
        primary: prefersDarkMode ? { main: "#333333" } : { main: "#3F51B5" },
        icon: prefersDarkMode ? { main: "#FFF" } : { main: "#3F51B5" },
        link: prefersDarkMode ? { main: "#FFF" } : { main: "black" },
        appbar: { main: "#FFF" },
        separator: prefersDarkMode
          ? { main: "rgba(255,255,255,.35)" }
          : { main: "rgba(0,0,0,.15)" },
      },
    },
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <CssBaseline />
        <Routes />
      </StylesProvider>
    </ThemeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
