import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/Navbar"
import Body from "./components/Body";


const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
