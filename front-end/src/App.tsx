import React, { useReducer } from "react";
import PageWrapper from "./components/common/PageWrapper";
import LandingPage from "./pages/landing";
import { ProductContext } from "./context/ProductContext";
import { ProductReducer, initialState } from "./context/ProductReducer";
import { ProductStateType, ProductActionType } from "./utils/type";

function App() {
  const [state, dispatch] = useReducer<
    React.Reducer<ProductStateType, ProductActionType>
  >(ProductReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      <PageWrapper>
        <LandingPage />
      </PageWrapper>
    </ProductContext.Provider>
  );
}

export default App;
