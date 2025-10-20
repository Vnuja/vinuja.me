import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

function mount() {
  const el = document.getElementById("root");
  if (!el) {
    console.error("No #root found. HTML served was:", document.documentElement.outerHTML.slice(0, 400));
    return;
  }
  ReactDOM.createRoot(el).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Module scripts are deferred, but this guarantees order even if HTML is wrong
if (document.readyState === "loading") {
  window.addEventListener("DOMContentLoaded", mount);
} else {
  mount();
}
document.body.style.backgroundColor = '#101010';
