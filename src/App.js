import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Content from "./Components/Content";
import WatchPage from "./Components/WatchPage";

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <>
          <Header />
          <Body />
        </>
      ),
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
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

const App = () => {
  return (
    <RouterProvider
      router={appRouter}
      future={{ v7_startTransition: true }}
    />
  );
};

export default App;
