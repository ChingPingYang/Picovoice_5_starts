import React from "react";
import axios from "axios";
import LandingPage from "./LandingPage";
import { ProductContext } from "../../context/ProductContext";
import { Types } from "../../utils/type";

function Index() {
  const isFocused = React.useRef(true);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<null | string>(null);

  const { state, dispatch } = React.useContext(ProductContext);

  React.useEffect(() => {
    const source = axios.CancelToken.source();
    const setProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios({
          method: "GET",
          url: "/api/product",
          cancelToken: source.token,
        });
        if (res.status === 200 && isFocused.current) {
          dispatch({ type: Types.Set, payload: res.data });
        }
      } catch (err) {
        setError("ERROR...");
      } finally {
        setLoading(false);
      }
    };
    setProducts();

    return () => {
      source.cancel();
      isFocused.current = false;
    };
  }, []);

  return (
    <React.Fragment>
      <LandingPage loading={loading} data={state} error={error} />
    </React.Fragment>
  );
}

export default Index;
