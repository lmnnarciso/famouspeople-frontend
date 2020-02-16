import React from "react";
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  useColorMode,
  Button,
  theme,
  useTheme
} from "@chakra-ui/core";
import customTheme from "./darktheme";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./containers/Home";
import Movie from "./containers/Movie";
import Test from "./containers/Test";

function ColorModeExample() {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log("colormode", colorMode);
  return (
    <header>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </header>
  );
}

function App() {
  console.log("process.env", process.env);
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: "red.500", dark: "red.200" };
  const color = { light: "white", dark: "gray.800" };
  console.log("theme diff", customTheme);
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <ColorModeProvider>
        {/* <ColorModeExample /> */}
        <Router>
          <div>
            {/* <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </nav> */}
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/movie/:id">
                <Movie />
              </Route>
              <Route path="/test">
                <Test />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
