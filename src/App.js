import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { loadProducts } from "./redux/actions/productActions";
import Sidebar from "./Sidebar/Sidebar";
import FormContainer from "./FormContainer/FormContainer";

function App() {
  const dispatch = useDispatch();

  // makes API call to fetch products via redux saga
  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Sidebar />
      <FormContainer />
    </div>
  );
}

export default App;
