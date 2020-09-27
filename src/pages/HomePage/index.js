import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, Avatar } from "@material-ui/core";
import useStyles from "./styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import School from "@material-ui/icons/School";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { useNavigate, useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  useEffect(() => {
    document.querySelectorAll(".ball").forEach((el) => el.remove());
  }, [location]);

  let navigate = useNavigate();
  const styles = useStyles();
  const [posts, setPosts] = useState([
    {
      id: 1,
      urlImage:
        "https://cdn.cgn.inf.br/cgn-cdn/fotos-cgn/2020/09/03093904/spotify.jpg",
      title: "Meu Top 50 no spotify",
      date: "Mar 16, 2018. 1 min leitura",
      content: "lab-spotify-50.md",
    },
    {
      id: 2,
      urlImage:
        "https://cdn.cgn.inf.br/cgn-cdn/fotos-cgn/2020/09/03093904/spotify.jpg",
      title: "Meu Top 50 no spotify",
      date: "Mar 16, 2018. 1 min leitura",
    },
    {
      id: 3,
      urlImage:
        "https://cdn.cgn.inf.br/cgn-cdn/fotos-cgn/2020/09/03093904/spotify.jpg",
      title: "Meu Top 50 no spotify",
      date: "Mar 16, 2018. 1 min leitura",
    },
  ]);

  const handleClick = (post) => {
    navigate("detail", { state: { post: post } });
  };

  return (
    <>
      <Container id="home" className={styles.container}>
        <Grid className={styles.perfil}>
          <Grid className={styles.social}>
            <Avatar
              alt="My photograph"
              src="https://avatars1.githubusercontent.com/u/25506290?s=460&u=ea4dd268c9433454edc34060556c4bff5dd3e8a0&v=4"
              className={styles.avatar}
            />
            <br />
            <Typography align="center" variant="h5">
              Léo Lima
            </Typography>
            <Typography align="center" variant="h6">
              Graduando em Ciência da Computação
            </Typography>
            <br />
            <Grid className={styles.socialMedias}>
              <span
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/leonardo-lima-215b25138/",
                    "_blank"
                  );
                }}
                className={styles.button}
              >
                <LinkedInIcon className={styles.icon} />
              </span>
              <span
                onClick={() => {
                  window.open(
                    "mailto:leonardo.lima.silva@ccc.ufcg.edu.br",
                    "_blank"
                  );
                }}
                className={styles.button}
              >
                <MailIcon className={styles.icon} />
              </span>
              <span
                onClick={() => {
                  window.open("https://www.github.com/tsleolima/", "_blank");
                }}
                className={styles.button}
              >
                <GitHubIcon className={styles.icon} />
              </span>
            </Grid>
          </Grid>
          <Grid className={styles.bio}>
            <Typography variant="h3">Biografia</Typography>
            <br />
            <Typography variant="h6">
              Leonardo, graduando em ciência da Computação na UFCG, sempre em
              constante aprendizado. Atualmente trabalhando como desenvolvedor
              mobile e data science.
            </Typography>
            <br />
            <Grid className={styles.info}>
              <Grid className={styles.list}>
                <Typography variant="h5">Formação</Typography>
                <Grid className={styles.formacaoList}>
                  <Typography className={styles.text} variant="h6">
                    <School className={styles.inicon} />
                    Graduando em Ciência da Computação, UFCG
                  </Typography>
                </Grid>
              </Grid>
              <Grid className={styles.list}>
                <Typography variant="h5">Habilidades</Typography>
                <ul className={styles.listSkills}>
                  <li>
                    <Typography variant="h6">Ciência de Dados</Typography>
                  </li>
                  <li>
                    <Typography variant="h6">Desenvolvimento Mobile</Typography>
                  </li>
                  <li>
                    <Typography variant="h6">
                      Desenvolvimento Full Stack
                    </Typography>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid id="posts" className={styles.posts}>
          <Typography variant="h4" className={styles.aff}>
            Postagens Recentes
          </Typography>
          <div className={styles.separator} />
          <Grid className={styles.listPosts}>
            {posts.map((item) => (
              <Grid
                onClick={() => {
                  handleClick(item);
                }}
                key={item.id}
                className={styles.post}
              >
                <img
                  className={styles.postImage}
                  alt="spotify"
                  src={item.urlImage}
                />
                <Grid className={styles.postInfo}>
                  <span className={styles.title}>
                    <Typography variant="h4">{item.title}</Typography>
                    <Typography variant="h6" className={styles.minText}>
                      Leia mais...
                    </Typography>
                  </span>
                  <Typography variant="h6" className={styles.minText}>
                    {item.date}
                  </Typography>
                </Grid>
                <div className={styles.separator} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
