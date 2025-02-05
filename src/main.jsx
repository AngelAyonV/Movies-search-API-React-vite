import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SearchMoviesApp from "./SearchMoviesApp";
// import './index.css'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SearchMoviesApp />
  </StrictMode>
);
