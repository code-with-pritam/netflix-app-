import "./app.scss";
// import Featured from "./component/featured/Featured";
// import ListItem from "./component/listitem/Listitem";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { Redirect } from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={user ? <Home /> : <Navigate to="/register" />}
          />
          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          {user && (
            <>
              <Route path="/movies" element={<Home type="movies" />} />
              <Route path="/series" element={<Home type="Series" />} />
              <Route path="/watch" element={<Watch />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
