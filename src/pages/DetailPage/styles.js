import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: 0,
    margin: 0,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: theme.palette.link.main,
  },
  minText: {
    fontSize: 13,
  },
  post: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    "@media only screen and (min-width: 768px)": {
      width: "80vw",
    },
    width: "100vw",
  },
  postInfo: {
    "@media only screen and (min-width: 768px)": {
      alignSelf: "center",
    },
  },
  postImage: {
    "@media (max-width: 780px)": {
      width: "100vw",
    },
  },
  markdown: {
    marginTop: 20,
  },
}));

export default useStyles;
