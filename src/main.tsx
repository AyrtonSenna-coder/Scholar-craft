
  import React from "react";
  import { createRoot } from "react-dom/client";
  import App from "./app/App";
  // @ts-ignore: Allow side-effect CSS import without type declarations
  import "./styles/index.css";

  const container = document.getElementById("root");
  if (container) {
    const root = createRoot(container);
    root.render(<App />);
  }
  