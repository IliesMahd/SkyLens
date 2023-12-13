import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import "../src/styles/general.scss"
import { Login } from "./components/Login";

interface AppRoute {
  path: string;
  element: JSX.Element;
}

const routes: AppRoute[] = [
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  }
];

function App() {
  return (
    <Router>
      <div className="container-app">
        <Header />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
