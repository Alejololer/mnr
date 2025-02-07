import { createRoot } from "react-dom/client";
import React from "react";
import App from "./components/app";
import axios from "axios";
import { API_SERVER_URL } from "./public-config";

const container = document.getElementById("app");
const root = createRoot(container);



root.render(
    <App initialData={(window as any).initialData}/>
);

