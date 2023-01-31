import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Integrations from "./Integrations";
import JsonViews from "./JsonViews";
import Terraform from "./Terraform";
import { ColorModeScript } from '@chakra-ui/react'
import reportWebVitals from "./reportWebVitals";
import theme from "./theme/index";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/integrations" element={<Integrations />}></Route>
        <Route path="/json" element={<JsonViews />}></Route>
        <Route path="/terraform" element={<Terraform />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
