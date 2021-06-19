import React from "react";
import axios from "axios";
import { ProductContext } from "../../context/ProductContext";
import Rating from "@material-ui/lab/Rating";
import { ProductType, Types } from "../../utils/type";

interface RatingStarsProps {
  data: ProductType;
}

function RatingStars({ data }: RatingStarsProps) {
  const isFocused = React.useRef(true);
  const [loading, setLoading] = React.useState(false);
  const { dispatch } = React.useContext(ProductContext);
  const source = axios.CancelToken.source();

  React.useEffect(() => {
    return () => {
      source.cancel();
      isFocused.current = false;
    };
  }, []);

  const handleOnchange = async (newValue: number | null) => {
    setLoading(true);
    if (newValue !== null) {
      try {
        const res = await axios({
          method: "PUT",
          url: `/api/product/${data.id}`,
          data: {
            newRate: newValue,
          },
          cancelToken: source.token,
        });

        if (res.status === 200 && isFocused.current) {
          dispatch({
            type: Types.Update,
            payload: { id: data.id, newRate: newValue },
          });
        }
      } catch (err) {
        console.log(err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    }
  };
  return (
    <Rating
      name={`${data.id}-${data.name}`}
      value={data.rate}
      onChange={(event, newValue) => {
        handleOnchange(newValue);
      }}
      readOnly={loading}
    />
  );
}

export default RatingStars;
