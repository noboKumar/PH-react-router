import { Component, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Blogs from "./components/Blogs.jsx";
import Users from "./components/Users.jsx";
import Users2 from "./components/Users2.jsx";
import UserDetails from "./components/UserDetails.jsx";
import Posts from "./components/Posts.jsx";
import PostDetails from "./PostDetails.jsx";

const userData = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/blogs",
        Component: Blogs,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "/users/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },
      {
        path: "/users2",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Users2 userData={userData}></Users2>
          </Suspense>
        ),
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts,
      },
      {
        path: "/posts/:postId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails,
      },
    ],
  },
  {
    path: "/app",
    Component: App,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
