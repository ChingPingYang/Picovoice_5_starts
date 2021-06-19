import React from "react";
import {
  makeStyles,
  Theme,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import { ProductType } from "../../utils/type";
import Card from "../../components/common/Card";

interface LandingPageProps {
  loading: boolean;
  data: Array<ProductType>;
  error: null | string;
}

const LandingPage = ({ loading, data, error }: LandingPageProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {loading ? (
        <CircularProgress size={70} className={classes.loading} />
      ) : error ? (
        <Typography variant="h5">{error}</Typography>
      ) : (
        <div className={classes.cardWrapper}>
          {data.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
      )}
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    width: "80%",
  },
  cardWrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    marginTop: 120,
  },
}));

export default LandingPage;
