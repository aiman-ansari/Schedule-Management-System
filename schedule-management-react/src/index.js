import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { RoomContextProvider } from "./Context/RoomContext";
import { UserContextProvider } from "./Context/UserContext";
import { MeetingContextProvider } from "./Context/MeetingContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoomContextProvider>
        <UserContextProvider>
          <MeetingContextProvider>
            <App />
          </MeetingContextProvider>
        </UserContextProvider>
      </RoomContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
