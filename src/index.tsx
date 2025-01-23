import { createRoot } from "react-dom/client";
import React from "react";

const App = () => {
    // return <div>Hello React</div>;
    return <div>Hello React</div>;	
};

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);