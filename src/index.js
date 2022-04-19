import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import MainLayout from "./components/MainLayout";
import { Router } from "./Routs/Routs";
import { configureStore } from "./store/configureStore";

const container = document.getElementById("root");
const root = createRoot(container);

const store = configureStore();

root.render(
  <Provider store={store}>
    <HashRouter>
      <MainLayout>
        <Router />
      </MainLayout>
    </HashRouter>
  </Provider>
);
