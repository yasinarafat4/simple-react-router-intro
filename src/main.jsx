import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import ErrorPage from "./error-page";
import Friends from "./components/Friends/Friends";
import FriendDetail from "./components/FriendDetail/FriendDetail";
import Posts from "./components/Posts/Posts";
import PostDetails from "./components/PostDetails/PostDetails";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//   },
//   {
//     path: "/about",
//     element: <About></About>,
//   },
//   {
//     path: "/contact",
//     element: <Contact></Contact>,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "friends",
        element: <Friends />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "friend/:friendId",
        element: <FriendDetail></FriendDetail>,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.friendId}`
          ),
      },
      {
        path: "posts",
        element: <Posts></Posts>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "post/:idOfPost",
        element: <PostDetails></PostDetails>,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.idOfPost}`
          ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
