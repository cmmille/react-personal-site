import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Contact from "../pages/Contact/Contact";
import Root from "../pages/Root";

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {path: '', element: <Home />},
      {path: 'apps', element: <Apps />},
      {path: 'contact', element: <Contact />},
    ]
  },
];
export default routes;
