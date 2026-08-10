import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./style.css";

// biome-ignore lint/style/noNonNullAssertion: PASS
createRoot(document.querySelector("#root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
