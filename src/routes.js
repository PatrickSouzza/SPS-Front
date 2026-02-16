import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Login from "./pages/SignIn/SignIn"
import UserEdit, { userLoader } from "./pages/Users/UserEdit";
import PrivateRoute from "./components/PrivateRoute";
import CreateUser from "./pages/Users/UserCreate";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/users",
    element: (
      <PrivateRoute>
        <Users />
      </PrivateRoute>
    ),
  },
  {
    path: "/users/create",
    element: (
      <PrivateRoute>
        <CreateUser />
      </PrivateRoute>
    )
  },
  {
    path: "/users/:userId",
    element: (
      <PrivateRoute>
        <UserEdit />      
      </PrivateRoute>
    ),
    loader: userLoader,
  },
]);

export default router;
