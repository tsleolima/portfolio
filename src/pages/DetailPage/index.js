import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import useStyles from "./styles";
import Animation from "../../utils/animation";
import ReactMarkdown from "react-markdown";

function Detail() {
  const { state } = useLocation();
  const { post } = state;
  const [textMarkdown, setTextMarkdown] = useState("");
  const styles = useStyles();

  useEffect(() => {
    const markdownPath = require(`../../posts/${post.content}`);
    fetch(markdownPath)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        setTextMarkdown(text);
      });
  }, [post.content]);

  return (
    <>
      <Container className={styles.container} id="home">
        <Grid container direction="column" alignItems="center">
          <Grid className={styles.post}>
            <Grid className={styles.postInfo}>
              <img
                className={styles.postImage}
                alt="spotify"
                src={post.urlImage}
              />
              <Typography variant="h4">{post.title}</Typography>
              <Typography variant="h6" className={styles.minText}>
                {post.date}
              </Typography>
            </Grid>
            <div className={styles.separator} />
            <ReactMarkdown className={styles.markdown} source={textMarkdown} />
          </Grid>
        </Grid>
        <Animation />
      </Container>
    </>
  );
}

export default Detail;
