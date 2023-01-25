import { useRoutes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";

// https://reactrouter.com/en/v6.3.0/upgrading/v5#use-useroutes-instead-of-react-router-config
// https://dev.to/dauntless/react-routers-useroutes-hook-38fc
export default function Router() {
  let element = useRoutes([
    {
      element: <AuthLayout />,
      children: [
        { path: "/", element: <Login /> },
        { path: "/login", element: <Login /> },
        { path: "signup", element: <SignUp /> }
      ]
    },
    {
      element: <MainLayout />,
      children: [
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> }
      ]
    },
    // Not found routes work as you'd expect
    { path: "*", element: <p>Not found</p> }
  ]);

  return element;
}
