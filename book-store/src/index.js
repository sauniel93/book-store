import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./contexts/MenuContext";
import { BookContextProvider } from "./contexts/BookContext";
import { ConfirmDialogContextProvider } from "./contexts/ConfirmDialogContext";
import { UserContextProvider } from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <ContextProvider>
        <BookContextProvider>
          <ConfirmDialogContextProvider>
            <App />
          </ConfirmDialogContextProvider>
        </BookContextProvider>
      </ContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
