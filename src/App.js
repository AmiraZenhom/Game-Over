import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import All from "./Component/All/All";
import Home from "./Component/Home/Home";
import MasterLayout from "./Component/MasterLayout/MasterLayout";
import Notfound from "./Component/Notfound/Notfound";
import Story from "./Component/Story/Story";
import Platforms from "./Component/Platforms/Platforms";
import Categories from "./Component/Categories/Categories";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import Pc from "./Component/Pc/Pc";
import Browser from "./Component/Browser/Browser";
import Popularity from "./Component/Popularity/Popularity";
import Releasedata from "./Component/Releasedata/Releasedata";
import Racing from "./Component/Racing/Racing";
import Sport from "./Component/Sport/Sport";
import Social from "./Component/Social/Social";
function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      errorElement: <Notfound />,
      children: [
        { index: true, element: <Home /> },
        { path: "all", element: <All /> },
        {
          path: "platforms",
          element: <Platforms />,
          children: [
            { path: "pc", element: <Pc /> },
            { path: "browser", element: <Browser /> },
          ],
        },
        {
          path: "story",
          element: <Story />,
          children: [
            { path: "releasedata", element: <Releasedata /> },
            { path: "popularity", element: <Popularity /> },
          ],
        },
        {
          path: "categories",
          element: <Categories />,
          children: [
            { path: "racing", element: <Racing /> },
            { path: "sport", element: <Sport /> },
            { path: "social", element: <Social /> },
          ],
        },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
