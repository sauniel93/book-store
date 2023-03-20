import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./contexts/MenuContext";
import { BookContextProvider } from "./contexts/BookContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BookContextProvider>
        <App />
      </BookContextProvider>
    </ContextProvider>
  </React.StrictMode>
);
