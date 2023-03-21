import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./contexts/MenuContext";
import { BookContextProvider } from "./contexts/BookContext";
import { ConfirmDialogContextProvider } from "./contexts/ConfirmDialogContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BookContextProvider>
        <ConfirmDialogContextProvider>
          <App />
        </ConfirmDialogContextProvider>
      </BookContextProvider>
    </ContextProvider>
  </React.StrictMode>
);
