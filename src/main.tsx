import {MantineProvider} from "@mantine/core";
import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import "./index.css";
import '@mantine/core/styles.css';

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <MantineProvider defaultColorScheme="light">
            <App />
        </MantineProvider>
    </StrictMode>
);
// createRoot(document.getElementById("root")!).render(<div>Hello bro</div>);
