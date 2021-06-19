import { Paper, makeStyles, Typography, Theme } from "@material-ui/core";
import { ProductType } from "../../utils/type";
import RatingStars from "../widgets/RatingStars";

interface CardProps {
  data: ProductType;
}
type StyleProps = {
  imgUrl: string;
};

function Card({ data }: CardProps) {
  const classes = useStyles({ imgUrl: data.imgUrl });
  return (
    <Paper elevation={2} className={classes.root}>
      <div className={classes.image}></div>
      <div className={classes.textWrapper}>
        <Typography>{data.name}</Typography>
        <Typography>${data.price}</Typography>
      </div>
      <div className={classes.ratingStartsWrapper}>
        <RatingStars data={data} />
      </div>
    </Paper>
  );
}

const useStyles = makeStyles<Theme, StyleProps>({
  root: {
    width: 250,
    alignSelf: "flex-start",
    overflow: "hidden",
    margin: 10,
  },
  image: {
    width: "100%",
    height: 200,
    backgroundImage: (props) => `url(${props.imgUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  textWrapper: {
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
  },
  ratingStartsWrapper: {
    paddingLeft: 6,
  },
});

export default Card;
