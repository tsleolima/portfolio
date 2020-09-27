import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  text: {
    display: "flex",
    alignItems: "center",
  },
  perfil: {
    display: "flex",
    marginTop: 30,
    marginBottom: 10,
    "@media (max-width: 780px)": {
      flexDirection: "column",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  list: {
    "@media (max-width: 780px)": {
      marginTop: 10,
    },
    flex: 1,
  },
  listSkills: {
    marginLeft: 16,
  },
  social: {
    display: "flex",
    flexDirection: "column",
    flex: 2,
    paddingLeft: 10,
    paddingRight: 10,
  },
  bio: {
    flex: 7,
  },
  info: {
    display: "flex",
    "@media (max-width: 780px)": {
      flexDirection: "column",
    },
  },
  avatar: {
    width: theme.spacing(22),
    height: theme.spacing(22),
    alignSelf: "center",
  },
  icon: {
    fontSize: 40,
    color: theme.palette.icon.main,
    marginLeft: 5,
    marginRight: 5,
  },
  socialMedias: {
    display: "flex",
    alignSelf: "center",
  },
  button: {
    cursor: "pointer",
    paddingVertical: 30,
    transition: "transform .8s ease-in-out;",
    "&:hover": {
      transform: ["scale(1.5) rotate(360deg)"],
    },
  },
  inicon: {
    fontSize: 25,
    marginRight: 10,
    color: theme.palette.icon.main,
  },
  subTitle: {
    marginTop: 10,
  },
  title: {
    display: "flex",
    textDecoration: "none",
    flexDirection: "row",
    justifyContent: "space-between",
    color: theme.palette.appbar.main,
  },
  minText: {
    fontSize: 13,
  },
  postImage: {},
  postInfo: {
    cursor: "pointer",
  },
  listPosts: {
    "@media only screen and (min-width: 768px)": {
      columns: 2,
    },
  },
  post: {
    margin: 15,
    "@media only screen and (min-width: 768px)": {
      // display: "flex",
      // flexDirection: "column",
      display: "inline-block",
    },
  },
  posts: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 50,
  },
  separator: {
    width: "100%",
    borderBottom: `1px solid ${theme.palette.separator.main}`,
    marginTop: 10,
    marginBottom: 20,
  },
}));

export default useStyles;
