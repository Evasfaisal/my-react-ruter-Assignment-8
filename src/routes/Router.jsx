import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Root from "../pages/Root";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import AppDetail from "../pages/AppDetails";
import AppNotFound from "../pages/AppNotFound";
import PageNotFound from "../pages/PageNotFound";
import Installed from "../pages/Installed";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { index: true, element: <Home /> },

            {
                path: "apps",
                children: [
                    { index: true, element: <Apps /> }, // ✅ /apps
                    { path: ":wrong*", element: <AppNotFound /> }, // ✅ /apps/anything => AppNotFound
                ],
            },

            { path: "app/:id", element: <AppDetail /> },
            { path: "installed", element: <Installed /> },
            { path: "app-not-found", element: <AppNotFound /> },

            // ✅ everything else
            { path: "*", element: <PageNotFound /> },
        ],
    },
]);
