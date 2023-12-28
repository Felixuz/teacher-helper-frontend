import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Routes } from "./constants";
import { Home, homeLoader } from "./routes";

const router = createBrowserRouter([
  { path: Routes.Home, element: <Home />, loader: homeLoader },
  { path: Routes.Register, element: <div>Register</div> },
  { path: Routes.Login, element: <div>Login</div> },
  { path: "*", element: <div>Not Found</div> },
]);

export default () => <RouterProvider router={router} />;
