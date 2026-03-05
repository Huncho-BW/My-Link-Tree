import React from "react";

import Login from "./Login";
import CreateAccount from "./CreateAccount";
import AddLink from "./addLink";
import Empty from "./Empty";
import Preview from "./Preview";

const routerConfig = {
  main: [
    { path: "/", element: <Login /> },
    { path: "/profile", element: <Empty /> },
    { path: "/create-account", element: <CreateAccount /> },
    { path: "/empty", element: <Empty /> },
    { path: "/preview", element: <Preview /> },
  ],
};

export default routerConfig;
