import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import "../src/styles/ge"

interface AppRoute {
  path: string;
  element: React.ComponentType;
}

const routes: AppRoute[] = [
  {
    path: "/",
    element: Home,
  },
];

const router = createBrowserRouter(
  createRoutesFromElements([
    ...routes.map((route) => (
      <Route key={route.path} path={route.path} element={<route.element />} />
    )),
  ])
);

console.log("router", router);

function App() {
  return (
    <div className="container-app">
      <Header />
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
