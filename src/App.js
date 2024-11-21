import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Content from "./Components/Content";
import WatchPage from "./Components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Content />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={appRouter} />
    </>
  );
};

export default App;
