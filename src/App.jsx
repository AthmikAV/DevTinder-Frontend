import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/Login";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";

import Requests from "./components/Requests";
import Connection from "./components/Connection";

const App = () => {
  return (
    <>
      <Provider store={appStore}>
         <BrowserRouter basename="/">
          <Routes>
          <Route path="/" element={<Body />}>
              <Route path="/login" element={<Login />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/edit" element={<EditProfile />} />
              <Route path="/requests" element={<Requests />} />
               <Route path="/connections" element={<Connection/>} />
              <Route path="/error" element={<Error />} />

              
              
              
          </Route>
          </Routes>
        </BrowserRouter>
     </Provider>
    </>
  );
};

export default App;
