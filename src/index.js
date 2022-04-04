import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CounterContainer from "./pages/Counter/containers/CounterContainer";
import { Router } from "./Routs/Routs";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
