import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Grid, Toolbar, AppBar, Typography, Button } from "@material-ui/core";
import useStyles from "../pages/HomePage/styles";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";

export default function MainRoutes() {
  const styles = useStyles();

  return (
    <Router>
      <AppBar className={styles.body} position="relative">
        <Toolbar className={styles.toolbar}>
          <Link className={styles.title} to="/">
            <Typography variant="h6">LÉO LIMA</Typography>
          </Link>
          <Grid>
            <Button
              onClick={() => {
                let offsetTop = document.getElementById("home").offsetTop;
                window.scrollTo({
                  top: offsetTop - 100,
                  behavior: "smooth",
                });
              }}
              color="inherit"
            >
              Home
            </Button>
            <Button
              onClick={() => {
                let offsetTop = document.getElementById("posts").offsetTop;
                window.scrollTo({
                  top: offsetTop,
                  behavior: "smooth",
                });
              }}
              color="inherit"
            >
              Posts
            </Button>
            <Button
              onClick={() => {
                let offsetTop = document.getElementById("contato").offsetTop;
                window.scrollTo({
                  top: offsetTop - 100,
                  behavior: "smooth",
                });
              }}
              color="inherit"
            >
              Contato
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="detail" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}
