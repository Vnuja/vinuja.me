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
 document.body.style.background = 'radial-gradient(1000px 600px at 80% 12%, rgba(199,0,57,0.16), transparent 60%), linear-gradient(180deg, #0b0b0b 0%, #0a0a0a 100%)'
               