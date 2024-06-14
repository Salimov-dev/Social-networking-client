import ReactDOM from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ThemeProvider from "./app/components/theme-provider/index.tsx";
import Auth from "./app/pages/auth/index.tsx";
import Layout from "./app/components/layout/index.tsx";
import Posts from "./app/pages/posts/index.tsx";
import CurrentPost from "./app/pages/current-post/index.tsx";
import UserProfile from "./app/pages/user-profile/index.tsx";
import Followers from "./app/pages/followers.tsx/index.tsx";
import Following from "./app/pages/following/index.tsx";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Posts />
      },
      {
        path: "posts/:id",
        element: <CurrentPost />
      },
      {
        path: "users/:id",
        element: <UserProfile />
      },
      {
        path: "followers",
        element: <Followers />
      },
      {
        path: "following",
        element: <Following />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <NextUIProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </NextUIProvider>
  </Provider>
);
