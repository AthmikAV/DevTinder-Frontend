import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/Login";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  return (
    <>
      <Provider store={appStore}>
         <BrowserRouter basename="/">
          <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login/>} />
          </Route>
          </Routes>
        </BrowserRouter>
     </Provider>
    </>
  );
};

export default App;
