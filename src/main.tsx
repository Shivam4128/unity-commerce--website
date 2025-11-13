import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import {StrictMode} from "react";

createRoot(document.getElementById("root")!).render(
 <StrictMode>
    <App />
  </StrictMode>,
);
// createRoot(document.getElementById("root")!).render(<div>Hello bro</div>);
