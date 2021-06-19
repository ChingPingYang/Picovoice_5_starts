import React from "react";
import { Box, makeStyles } from "@material-ui/core";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const classes = useStyle();

  return <Box className={classes.root}>{children}</Box>;
};

const useStyle = makeStyles({
  root: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
  },
});
export default PageWrapper;
